import { useState, useEffect, useMemo } from 'react'
import cvData from '../data/cv_data.json'
import Typewriter from '../components/Typewriter'
import { useCountUp } from '../hooks/useCountUp'

interface Publication {
  link: string
  title: string
  author: string
  journal: string
  journal_issue: string
  year: string
  citation: string
  topics: string[]
  authors: string[]
}

// Topic keywords mapping for extraction from titles
const TOPIC_KEYWORDS: { [key: string]: string[] } = {
  'Nanoparticles': ['nanoparticle', 'nanoparticles', 'nanomaterial', 'nanomaterials'],
  'Gold Nanoparticles': ['gold nanoparticle', 'gold nano', 'aunp'],
  'Silver Nanoparticles': ['silver nanoparticle', 'silver nano', 'agnp'],
  'Green Synthesis': ['green synthesis', 'biosynthesis', 'biogenic', 'biological synthesis', 'ecofriendly'],
  'Antimicrobial': ['antimicrobial', 'antibacterial', 'antifungal'],
  'Biofilm': ['biofilm'],
  'Cancer': ['cancer', 'tumor', 'tumour', 'anticancer', 'carcinoma'],
  'Drug Delivery': ['drug delivery', 'drug carrier', 'therapeutic'],
  'Diagnostics': ['diagnostic', 'detection', 'biosensor', 'sensing'],
  'Antioxidant': ['antioxidant', 'oxidative stress'],
  'Wound Healing': ['wound', 'healing'],
  'Ginseng': ['ginseng', 'panax'],
  'Plant Extract': ['plant extract', 'leaf extract', 'root extract'],
  'Microorganisms': ['bacteria', 'bacterial', 'microorganism', 'microbial', 'probiotic'],
  'Inflammation': ['inflammat', 'anti-inflammatory'],
  'Cytotoxicity': ['cytotoxic', 'cell viability', 'apoptosis'],
  'Review': ['review', 'overview', 'perspective'],
}

function extractTopics(title: string): string[] {
  const titleLower = title.toLowerCase()
  const foundTopics: string[] = []
  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    for (const keyword of keywords) {
      if (titleLower.includes(keyword)) {
        foundTopics.push(topic)
        break
      }
    }
  }
  return foundTopics.slice(0, 3)
}

function normalizeAuthorName(name: string): string {
  let normalized = name.trim().replace(/\s+/g, ' ').replace(/\.\.\.  /g, '').replace(/\*+/g, '').trim()
  
  // Normalize Priyanka Singh variants to 'P Singh'
  const lowerName = normalized.toLowerCase()
  if (lowerName === 'p singh' || lowerName === 'priyanka singh' || lowerName === 'im priyanka singh' || lowerName === 'singh,p' || lowerName === 'singh, p' || lowerName.includes('p singh')) {
    return 'P Singh'
  }
  
  return normalized
}

function parseAuthors(authorString: string): string[] {
  return authorString.split(',').map(normalizeAuthorName).filter(name => name.length > 1 && name !== '...')
}

export default function Publications() {
  const publicationsCount = useCountUp({ end: cvData.bibliometrics.totalPublications, duration: 1200 })
  const citationsCount = useCountUp({ end: cvData.bibliometrics.totalCitations, duration: 1200 })
  const hIndexCount = useCountUp({ end: cvData.bibliometrics.hIndex, duration: 1000 })
  const impactFactorCount = useCountUp({ end: cvData.bibliometrics.highestImpactFactor, duration: 1000, decimals: 1 })

  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)
  const [displayCount, setDisplayCount] = useState(25)
  const [selectedYears, setSelectedYears] = useState<string[]>([])
  const [selectedJournals, setSelectedJournals] = useState<string[]>([])
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({ year: false, journal: false, topic: false, author: false })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortBy, setSortBy] = useState<'year-desc' | 'citations-desc'>('year-desc')

  useEffect(() => {
    fetch('/priyankasingh/data/scholar_publications_dom.csv')
      .then(response => response.text())
      .then(csvText => {
        const rows = csvText.split('\n')
        const parsedData: Publication[] = []
        for (let i = 1; i < rows.length; i++) {
          if (rows[i].trim() === '') continue
          const values = parseCSVRow(rows[i])
          if (values.length >= 7) {
            const title = values[1]
            const authorString = values[2]
            parsedData.push({
              link: values[0],
              title,
              author: authorString,
              journal: values[3],
              journal_issue: values[4],
              year: values[5],
              citation: values[6],
              topics: extractTopics(title),
              authors: parseAuthors(authorString)
            })
          }
        }
        parsedData.sort((a, b) => {
          const yearDiff = parseInt(b.year) - parseInt(a.year)
          if (yearDiff !== 0) return yearDiff
          return parseInt(b.citation) - parseInt(a.citation)
        })
        setPublications(parsedData)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading publications:', error)
        setLoading(false)
      })
  }, [])

  const parseCSVRow = (row: string): string[] => {
    const result = []
    let current = ''
    let inQuotes = false
    for (let i = 0; i < row.length; i++) {
      const char = row[i]
      if (char === '"') { inQuotes = !inQuotes }
      else if (char === ',' && !inQuotes) { result.push(current.trim()); current = '' }
      else { current += char }
    }
    result.push(current.trim())
    return result
  }

  const filteredPublications = useMemo(() => {
    let filtered = publications
    if (selectedYears.length > 0) filtered = filtered.filter(pub => selectedYears.includes(pub.year))
    if (selectedJournals.length > 0) filtered = filtered.filter(pub => selectedJournals.includes(pub.journal))
    if (selectedTopics.length > 0) filtered = filtered.filter(pub => selectedTopics.some(topic => pub.topics.includes(topic)))
    if (selectedAuthors.length > 0) filtered = filtered.filter(pub => selectedAuthors.some(author => pub.authors.includes(author)))
    
    // Apply sorting
    if (sortBy === 'citations-desc') {
      filtered.sort((a, b) => {
        const aCit = parseInt(a.citation) || 0
        const bCit = parseInt(b.citation) || 0
        if (bCit !== aCit) return bCit - aCit
        // If citations are equal (including both 0), sort by year desc
        return parseInt(b.year) - parseInt(a.year)
      })
    } else {
      filtered.sort((a, b) => {
        const yearDiff = parseInt(b.year) - parseInt(a.year)
        if (yearDiff !== 0) return yearDiff
        const aCit = parseInt(a.citation) || 0
        const bCit = parseInt(b.citation) || 0
        return bCit - aCit
      })
    }
    
    return filtered
  }, [publications, selectedYears, selectedJournals, selectedTopics, selectedAuthors, sortBy])

  const facetCounts = useMemo(() => {
    const yearCounts: { [key: string]: number } = {}
    const journalCounts: { [key: string]: number } = {}
    const topicCounts: { [key: string]: number } = {}
    const authorCounts: { [key: string]: number } = {}
    const getFilteredExcluding = (excludeFacet: string) => {
      let filtered = publications
      if (excludeFacet !== 'year' && selectedYears.length > 0) filtered = filtered.filter(pub => selectedYears.includes(pub.year))
      if (excludeFacet !== 'journal' && selectedJournals.length > 0) filtered = filtered.filter(pub => selectedJournals.includes(pub.journal))
      if (excludeFacet !== 'topic' && selectedTopics.length > 0) filtered = filtered.filter(pub => selectedTopics.some(t => pub.topics.includes(t)))
      if (excludeFacet !== 'author' && selectedAuthors.length > 0) filtered = filtered.filter(pub => selectedAuthors.some(a => pub.authors.includes(a)))
      return filtered
    }
    getFilteredExcluding('year').forEach(pub => { if (pub.year && pub.year.trim()) yearCounts[pub.year] = (yearCounts[pub.year] || 0) + 1 })
    getFilteredExcluding('journal').forEach(pub => { if (pub.journal && pub.journal.trim()) journalCounts[pub.journal] = (journalCounts[pub.journal] || 0) + 1 })
    getFilteredExcluding('topic').forEach(pub => { pub.topics.forEach(topic => { topicCounts[topic] = (topicCounts[topic] || 0) + 1 }) })
    getFilteredExcluding('author').forEach(pub => { pub.authors.forEach(author => { authorCounts[author] = (authorCounts[author] || 0) + 1 }) })
    return { yearCounts, journalCounts, topicCounts, authorCounts }
  }, [publications, selectedYears, selectedJournals, selectedTopics, selectedAuthors])

  const sortedYears = useMemo(() => Object.entries(facetCounts.yearCounts).sort((a, b) => parseInt(b[0]) - parseInt(a[0])).map(([value, count]) => ({ value, count })), [facetCounts.yearCounts])
  const sortedJournals = useMemo(() => Object.entries(facetCounts.journalCounts).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([value, count]) => ({ value, count })), [facetCounts.journalCounts])
  const sortedTopics = useMemo(() => Object.entries(facetCounts.topicCounts).sort((a, b) => b[1] - a[1]).map(([value, count]) => ({ value, count })), [facetCounts.topicCounts])
  const sortedAuthors = useMemo(() => Object.entries(facetCounts.authorCounts).sort((a, b) => b[1] - a[1]).slice(0, 30).map(([value, count]) => ({ value, count })), [facetCounts.authorCounts])

  // Calculate max citation for badge
  const maxCitation = useMemo(() => {
    return publications.reduce((max, pub) => {
      const cit = parseInt(pub.citation) || 0
      return cit > max ? cit : max
    }, 0)
  }, [publications])

  const displayedPublications = filteredPublications.slice(0, displayCount)
  const handleLoadMore = () => setDisplayCount(prev => prev + 25)
  const toggleSection = (section: string) => setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  
  const toggleFilter = (type: 'year' | 'journal' | 'topic' | 'author', value: string) => {
    const setters = { year: setSelectedYears, journal: setSelectedJournals, topic: setSelectedTopics, author: setSelectedAuthors }
    const current = { year: selectedYears, journal: selectedJournals, topic: selectedTopics, author: selectedAuthors }
    if (current[type].includes(value)) setters[type](current[type].filter(v => v !== value))
    else setters[type]([...current[type], value])
    setDisplayCount(25)
  }

  const clearAllFilters = () => { setSelectedYears([]); setSelectedJournals([]); setSelectedTopics([]); setSelectedAuthors([]); setDisplayCount(25) }
  const hasActiveFilters = selectedYears.length > 0 || selectedJournals.length > 0 || selectedTopics.length > 0 || selectedAuthors.length > 0
  const allActiveFilters = [
    ...selectedYears.map(v => ({ type: 'year' as const, value: v, label: v })),
    ...selectedJournals.map(v => ({ type: 'journal' as const, value: v, label: v.length > 30 ? v.slice(0, 30) + '...' : v })),
    ...selectedTopics.map(v => ({ type: 'topic' as const, value: v, label: v })),
    ...selectedAuthors.map(v => ({ type: 'author' as const, value: v, label: v })),
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading publications...</p>
        </div>
      </div>
    )
  }

  const FilterSection = ({ title, sectionKey, items, selectedItems, filterType }: { title: string; sectionKey: string; items: { value: string; count: number }[]; selectedItems: string[]; filterType: 'year' | 'journal' | 'topic' | 'author' }) => (
    <div className="border-b border-slate-200 last:border-b-0">
      <button onClick={() => toggleSection(sectionKey)} className="w-full flex items-center justify-between py-4 text-left hover:bg-slate-50 transition-colors px-1">
        <span className="font-semibold text-slate-900">{title}</span>
        <div className="flex items-center gap-2">
          {selectedItems.length > 0 && <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">{selectedItems.length}</span>}
          <svg className={`w-5 h-5 text-slate-500 transition-transform ${expandedSections[sectionKey] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      {expandedSections[sectionKey] && (
        <div className="pb-4 max-h-64 overflow-y-auto">
          {items.length === 0 ? <p className="text-sm text-slate-500 px-1">No options available</p> : (
            <div className="space-y-1">
              {items.map(({ value, count }) => (
                <label key={value} className={`flex items-center gap-3 px-2 py-1.5 rounded-lg cursor-pointer transition-colors hover:bg-slate-100 ${selectedItems.includes(value) ? 'bg-primary/10' : ''}`}>
                  <input type="checkbox" checked={selectedItems.includes(value)} onChange={() => toggleFilter(filterType, value)} className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                  <span className={`flex-1 text-sm truncate ${selectedItems.includes(value) ? 'text-primary font-medium' : 'text-slate-700'}`}>{value}</span>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{count}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )

  const Sidebar = () => (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 px-5 py-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Filters</h3>
          {hasActiveFilters && <button onClick={clearAllFilters} className="text-sm text-primary hover:text-primary-dark font-medium transition-colors">Clear all</button>}
        </div>
        <p className="text-sm text-slate-600 mt-1">Showing <span className="font-semibold text-primary">{filteredPublications.length}</span> of <span className="font-semibold">{publications.length}</span></p>
        <div className="mt-3">
          <label className="block text-xs font-semibold text-slate-700 mb-2">Sort by</label>
          <div className="flex gap-2">
            <button onClick={() => setSortBy('year-desc')} className={`flex-1 px-3 py-2 text-xs rounded-lg transition-colors ${sortBy === 'year-desc' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>Year</button>
            <button onClick={() => setSortBy('citations-desc')} className={`flex-1 px-3 py-2 text-xs rounded-lg transition-colors ${sortBy === 'citations-desc' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>Citations</button>
          </div>
        </div>
      </div>
      {hasActiveFilters && (
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50">
          <div className="flex flex-wrap gap-2">
            {allActiveFilters.map(({ type, value, label }) => (
              <button key={`${type}-${value}`} onClick={() => toggleFilter(type, value)} className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                {label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="px-5 py-2">
        <FilterSection title="Year" sectionKey="year" items={sortedYears} selectedItems={selectedYears} filterType="year" />
        <FilterSection title="Topic" sectionKey="topic" items={sortedTopics} selectedItems={selectedTopics} filterType="topic" />
        <FilterSection title="Journal" sectionKey="journal" items={sortedJournals} selectedItems={selectedJournals} filterType="journal" />
        <FilterSection title="Author" sectionKey="author" items={sortedAuthors} selectedItems={selectedAuthors} filterType="author" />
      </div>
    </div>
  )

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50/40 via-white to-cyan-50/20 py-24">
        <div className="section-container">
          <h1 className="text-center mb-6">Publications</h1>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto">
            <Typewriter text={`${cvData.bibliometrics.totalPublications} peer-reviewed publications with ${cvData.bibliometrics.totalCitations.toLocaleString()}+ citations`} speed={30} />
          </p>
        </div>
      </section>

      {/* Research Impact Metrics */}
      <section className="section-alt section-container">
        <div className="section-header">
          <h2 className="mb-4">Research Impact</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="card text-center bg-white" ref={publicationsCount.elementRef}>
            <div className="text-4xl font-bold text-primary mb-2">
              {publicationsCount.count === 0 ? cvData.bibliometrics.totalPublications : Math.round(publicationsCount.count)}
            </div>
            <div className="text-slate-600">Publications</div>
            <p className="text-xs text-slate-500 mt-2">Peer-reviewed articles</p>
          </div>
          <div className="card text-center bg-white" ref={citationsCount.elementRef}>
            <div className="text-4xl font-bold text-primary mb-2">
              {citationsCount.count === 0 ? cvData.bibliometrics.totalCitations.toLocaleString() : Math.round(citationsCount.count).toLocaleString()}+
            </div>
            <div className="text-slate-600">Citations</div>
            <p className="text-xs text-slate-500 mt-2">Research impact</p>
          </div>
          <div className="card text-center bg-white" ref={hIndexCount.elementRef}>
            <div className="text-4xl font-bold text-primary mb-2">
              {hIndexCount.count === 0 ? cvData.bibliometrics.hIndex : Math.round(hIndexCount.count)}
            </div>
            <div className="text-slate-600">H-Index</div>
            <p className="text-xs text-slate-500 mt-2">Academic contribution</p>
          </div>
          <div className="card text-center bg-white" ref={impactFactorCount.elementRef}>
            <div className="text-4xl font-bold text-primary mb-2">
              {impactFactorCount.count === 0 ? cvData.bibliometrics.highestImpactFactor.toFixed(1) : impactFactorCount.count.toFixed(1)}
            </div>
            <div className="text-slate-600">Highest IF</div>
            <p className="text-xs text-slate-500 mt-2">Top journal</p>
          </div>
        </div>
      </section>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button onClick={() => setSidebarOpen(true)} className="btn-primary shadow-xl rounded-full px-6 py-3">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
          Filters
          {hasActiveFilters && <span className="ml-2 bg-white text-primary text-xs px-2 py-0.5 rounded-full font-bold">{allActiveFilters.length}</span>}
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-5 py-4 flex items-center justify-between z-10">
              <h3 className="font-bold text-lg text-slate-900">Filters</h3>
              <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-5"><Sidebar /></div>
          </div>
        </div>
      )}

      {/* Main Content: 2-Column Layout */}
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Left Sidebar - Desktop */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24"><Sidebar /></div>
            </aside>

            {/* Right: Publications List */}
            <div className="flex-1 min-w-0">
              <div className="lg:hidden mb-6">
                <p className="text-sm text-slate-600">Showing <span className="font-semibold text-primary">{filteredPublications.length}</span> of <span className="font-semibold">{publications.length}</span> publications</p>
              </div>

              <div className="space-y-4">
                {displayedPublications.map((pub, index) => {
                  const citCount = parseInt(pub.citation) || 0
                  const isHighestCitation = citCount > 0 && citCount === maxCitation
                  const isFirstAuthor = pub.authors.length > 0 && pub.authors[0] === 'P Singh'
                  const isLastAuthor = pub.authors.length > 0 && pub.authors[pub.authors.length - 1] === 'P Singh'
                  const isLatest = pub.year === '2026'
                  
                  return (
                    <div key={index} className="card card-hover group transition-all duration-300 hover:border-primary/50">
                      <div className="flex flex-col gap-3">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors">
                          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">{pub.title}</h3>
                        </a>
                        
                        {/* Special badges */}
                        {(isHighestCitation || isFirstAuthor || isLastAuthor || isLatest) && (
                          <div className="flex flex-wrap gap-2">
                            {isHighestCitation && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full text-xs font-semibold shadow-sm">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                Highest Citation
                              </span>
                            )}
                            {isFirstAuthor && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-semibold shadow-sm">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                First Author
                              </span>
                            )}
                            {isLastAuthor && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-semibold shadow-sm">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                                Last Author
                              </span>
                            )}
                            {isLatest && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-semibold shadow-sm">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                                Latest Publication
                              </span>
                            )}
                          </div>
                        )}
                        
                        <p className="text-sm text-slate-600 font-medium">{pub.author}</p>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
                          <span className="italic font-medium">{pub.journal}</span>
                          {pub.journal_issue && pub.journal_issue.trim() !== '' && <><span className="text-slate-400">•</span><span>{pub.journal_issue}</span></>}
                          {pub.year && pub.year.trim() !== '' && <><span className="text-slate-400">•</span><span className="text-primary font-semibold">{pub.year}</span></>}
                        </div>
                        {pub.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {pub.topics.map(topic => (
                              <button key={topic} onClick={() => { if (!selectedTopics.includes(topic)) toggleFilter('topic', topic) }} className={`text-xs px-2.5 py-1 rounded-full transition-colors ${selectedTopics.includes(topic) ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary'}`}>{topic}</button>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                          {pub.citation && pub.citation.trim() !== '' && parseInt(pub.citation) > 0 && (
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                              {pub.citation} citations
                            </span>
                          )}
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-4 py-2">
                            Read Paper
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {displayedPublications.length < filteredPublications.length && (
                <div className="text-center mt-12">
                  <button onClick={handleLoadMore} className="btn-primary">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    Load More ({filteredPublications.length - displayedPublications.length} remaining)
                  </button>
                </div>
              )}

              {filteredPublications.length === 0 && (
                <div className="text-center py-16">
                  <svg className="w-20 h-20 text-slate-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-slate-600 text-lg mb-4">No publications found matching your criteria.</p>
                  <button onClick={clearAllFilters} className="text-primary hover:text-primary-dark font-medium transition-colors">← Clear filters and show all</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Banner */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto card-accent bg-gradient-to-r from-purple-50/40 to-cyan-50/20 text-center py-12">
          <h2 className="mb-6">Interested in Collaboration?</h2>
          <p className="text-xl mb-8 text-slate-700 leading-relaxed max-w-prose mx-auto">Looking to collaborate on research projects, co-author publications, or discuss potential partnerships? Feel free to reach out.</p>
          <a href="mailto:prisi@dtu.dk" className="btn-primary rounded-full px-8 py-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
