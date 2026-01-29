import { useState, useEffect } from 'react'

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
  const [publications, setPublications] = useState<Publication[]>([])
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load and parse CSV file
    fetch('/portfolio_website/data/scholar_publications_dom.csv')
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
  }, [searchTerm, selectedYear, publications])

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
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Publications</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            {publications.length} peer-reviewed publications with {publications.reduce((sum, pub) => sum + parseInt(pub.citation || '0'), 0).toLocaleString()}+ citations
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Publications
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title, author, or journal..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Year Filter */}
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Year
                </label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredPublications.length} of {publications.length} publications
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {pub.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    {pub.author}
                  </p>
                  
                  <p className="text-gray-700 mb-3">
                    <span className="italic">{pub.journal}</span>
                    {pub.journal_issue && pub.journal_issue.trim() !== '' && (
                      <span> {pub.journal_issue}</span>
                    )}
                    {pub.year && pub.year.trim() !== '' && (
                      <span className="ml-2 text-primary font-medium">({pub.year})</span>
                    )}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    {pub.citation && pub.citation.trim() !== '' && parseInt(pub.citation) > 0 && (
                      <span className="text-sm text-gray-600">
                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {pub.citation} citations
                      </span>
                    )}
                    
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm font-medium"
                    >
                      Read Paper
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 text-lg">No publications found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedYear('')
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
