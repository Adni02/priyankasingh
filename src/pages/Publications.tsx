import { useState, useEffect } from 'react'
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
}

export default function Publications() {
  // Count-up animations for metrics
  const publicationsCount = useCountUp({ end: cvData.bibliometrics.totalPublications, duration: 1200 })
  const citationsCount = useCountUp({ end: cvData.bibliometrics.totalCitations, duration: 1200 })
  const hIndexCount = useCountUp({ end: cvData.bibliometrics.hIndex, duration: 1000 })
  const impactFactorCount = useCountUp({ end: cvData.bibliometrics.highestImpactFactor, duration: 1000, decimals: 1 })

  const [publications, setPublications] = useState<Publication[]>([])
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([])
  const [displayedPublications, setDisplayedPublications] = useState<Publication[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [loading, setLoading] = useState(true)
  const [displayCount, setDisplayCount] = useState(25)

  useEffect(() => {
    // Load and parse CSV file
    fetch('/priyankasingh/data/scholar_publications_dom.csv')
      .then(response => response.text())
      .then(csvText => {
        const rows = csvText.split('\n')
        // Skip header row
        const parsedData: Publication[] = []
        
        for (let i = 1; i < rows.length; i++) {
          if (rows[i].trim() === '') continue
          
          const values = parseCSVRow(rows[i])
          
          if (values.length >= 7) {
            parsedData.push({
              link: values[0],
              title: values[1],
              author: values[2],
              journal: values[3],
              journal_issue: values[4],
              year: values[5],
              citation: values[6]
            })
          }
        }
        
        // Sort by year (descending) and then by citation count
        parsedData.sort((a, b) => {
          const yearDiff = parseInt(b.year) - parseInt(a.year)
          if (yearDiff !== 0) return yearDiff
          return parseInt(b.citation) - parseInt(a.citation)
        })
        
        setPublications(parsedData)
        setFilteredPublications(parsedData)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading publications:', error)
        setLoading(false)
      })
  }, [])

  // Parse CSV row handling quoted fields
  const parseCSVRow = (row: string): string[] => {
    const result = []
    let current = ''
    let inQuotes = false
    
    for (let i = 0; i < row.length; i++) {
      const char = row[i]
      
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    result.push(current.trim())
    
    return result
  }

  // Filter publications
  useEffect(() => {
    let filtered = publications

    if (searchTerm) {
      filtered = filtered.filter(
        pub =>
          pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedYear) {
      filtered = filtered.filter(pub => pub.year === selectedYear)
    }

    setFilteredPublications(filtered)
    setDisplayCount(25) // Reset display count when filters change
  }, [searchTerm, selectedYear, publications])

  // Update displayed publications when filter or display count changes
  useEffect(() => {
    setDisplayedPublications(filteredPublications.slice(0, displayCount))
  }, [filteredPublications, displayCount])

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 25)
  }

  // Get unique years for filter
  const years = Array.from(new Set(publications.map(pub => pub.year)))
    .filter(year => year && year.trim() !== '')
    .sort((a, b) => parseInt(b) - parseInt(a))

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
              {Math.round(publicationsCount.count)}
            </div>
            <div className="text-slate-600">Publications</div>
            <p className="text-xs text-slate-500 mt-2">Peer-reviewed articles</p>
          </div>
          <div className="card text-center bg-white" ref={citationsCount.elementRef}>
            <div className="text-4xl font-bold text-primary mb-2">
              {Math.round(citationsCount.count).toLocaleString()}+
            </div>
            <div className="text-slate-600">Citations</div>
            <p className="text-xs text-slate-500 mt-2">Research impact</p>
          </div>
          <div className="card text-center bg-white" ref={hIndexCount.elementRef}>
            <div className="text-4xl font-bold text-primary mb-2">
              {Math.round(hIndexCount.count)}
            </div>
            <div className="text-slate-600">H-Index</div>
            <p className="text-xs text-slate-500 mt-2">Academic contribution</p>
          </div>
          <div className="card text-center bg-white" ref={impactFactorCount.elementRef}>
            <div className="text-4xl font-bold text-primary mb-2">
              {impactFactorCount.count.toFixed(1)}
            </div>
            <div className="text-slate-600">Highest IF</div>
            <p className="text-xs text-slate-500 mt-2">Top journal</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="card mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-semibold text-slate-900 mb-3">
                  Search Publications
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title, author, or journal..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Year Filter */}
              <div>
                <label htmlFor="year" className="block text-sm font-semibold text-slate-900 mb-3">
                  Filter by Year
                </label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
              <p className="text-sm font-medium text-slate-600">
                Showing <span className="text-primary font-semibold">{filteredPublications.length}</span> of <span className="text-primary font-semibold">{publications.length}</span> publications
              </p>
              {(searchTerm || selectedYear) && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedYear('')
                  }}
                  className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Clear filters →
                </button>
              )}
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-4">
            {displayedPublications.map((pub, index) => (
              <div key={index} className="card card-hover group transition-all duration-300 hover:border-primary/50">
                <div className="flex flex-col gap-3">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-primary transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                  </a>
                  
                  <p className="text-sm text-slate-600 font-medium">
                    {pub.author}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
                    <span className="italic font-medium">{pub.journal}</span>
                    {pub.journal_issue && pub.journal_issue.trim() !== '' && (
                      <>
                        <span className="text-slate-400">•</span>
                        <span>{pub.journal_issue}</span>
                      </>
                    )}
                    {pub.year && pub.year.trim() !== '' && (
                      <>
                        <span className="text-slate-400">•</span>
                        <span className="text-primary font-semibold">{pub.year}</span>
                      </>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {pub.citation && pub.citation.trim() !== '' && parseInt(pub.citation) > 0 && (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {pub.citation} citations
                      </span>
                    )}
                    
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm px-4 py-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Read Paper
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {displayedPublications.length < filteredPublications.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                Load More Publications ({filteredPublications.length - displayedPublications.length} remaining)
              </button>
            </div>
          )}

          {filteredPublications.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-20 h-20 text-slate-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate-600 text-lg mb-4">No publications found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedYear('')
                }}
                className="text-primary hover:text-primary-dark font-medium transition-colors"
              >
                ← Clear filters and show all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Collaboration Banner */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto card-accent bg-gradient-to-r from-purple-50/40 to-cyan-50/20 text-center py-12">
          <h2 className="mb-6">Interested in Collaboration?</h2>
          <p className="text-xl mb-8 text-slate-700 leading-relaxed max-w-prose mx-auto">
            Looking to collaborate on research projects, co-author publications, or discuss potential partnerships? 
            Feel free to reach out.
          </p>
          <a 
            href="mailto:prisi@dtu.dk"
            className="btn-primary rounded-full px-8 py-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
