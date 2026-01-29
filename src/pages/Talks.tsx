import cvData from '../data/cv_data.json'

export default function Talks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Talks & Conferences</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Recent Invited Talks & Conference Presentations
          </p>
        </div>
      </section>

      {/* Talks */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {cvData.talks.map((talk, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{talk.title}</h3>
                    {talk.description && (
                      <p className="text-gray-700 mb-2">{talk.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      {talk.date && (
                        <span className="text-primary font-medium">
                          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {talk.date}
                        </span>
                      )}
                      {talk.period && (
                        <span className="text-primary font-medium">
                          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {talk.period}
                        </span>
                      )}
                      {talk.status && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-primary">
                          {talk.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Opportunities */}
      <section className="bg-blue-50 section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Interested in Inviting Dr. Singh?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Dr. Singh is available for invited talks, keynote presentations, and panel discussions
            on topics related to nanomedicine, biomaterials, cancer therapy, and antimicrobial applications.
          </p>
          <a href="/portfolio_website/contact" className="btn-primary">
            Send Speaking Invitation
          </a>
        </div>
      </section>
    </div>
  )
}
