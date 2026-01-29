import cvData from '../data/cv_data.json'

export default function Grants() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Grants & Funding</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Competitive Research Funding and Fellowships
          </p>
        </div>
      </section>

      {/* Main Applicant Grants */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">Main Applicant</h2>
          <div className="space-y-6">
            {cvData.grants.mainApplicant.map((grant, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{grant.name}</h3>
                <div className="space-y-2 text-gray-700">
                  {grant.amount && (
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <strong>Amount:</strong> <span className="ml-2">{grant.amount}</span>
                    </p>
                  )}
                  {grant.period && (
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <strong>Period:</strong> <span className="ml-2">{grant.period}</span>
                    </p>
                  )}
                  {grant.date && (
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <strong>Date:</strong> <span className="ml-2">{grant.date}</span>
                    </p>
                  )}
                  {grant.country && (
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <strong>Country:</strong> <span className="ml-2">{grant.country}</span>
                    </p>
                  )}
                  {grant.status && (
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <strong>Status:</strong> <span className="ml-2 text-accent">{grant.status}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Applicant Grants */}
      <section className="bg-gray-50 section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">Co-Applicant</h2>
          <div className="space-y-6">
            {cvData.grants.coApplicant.map((grant, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{grant.name}</h3>
                <div className="space-y-2 text-gray-700">
                  {grant.amount && (
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <strong>Amount:</strong> <span className="ml-2">{grant.amount}</span>
                    </p>
                  )}
                  {grant.period && (
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <strong>Period:</strong> <span className="ml-2">{grant.period}</span>
                    </p>
                  )}
                  {grant.country && (
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <strong>Country:</strong> <span className="ml-2">{grant.country}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
