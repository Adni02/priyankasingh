import cvData from '../data/cv_data.json'
import Typewriter from '../components/Typewriter'

export default function Awards() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50/40 via-white to-cyan-50/20 py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Awards & Grants</h1>
          <p className="text-center text-xl text-slate-600 max-w-3xl mx-auto">
            <Typewriter text="Honors, Recognition, and Research Funding" speed={40} />
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cvData.awards.map((award, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{award.title}</h3>
                    <p className="text-primary mb-1">{award.conferredBy}</p>
                    <p className="text-sm text-slate-600">
                      {award.year || award.years || award.date}
                      {award.duration && ` (${award.duration})`}
                      {award.occurrence && ` - ${award.occurrence}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Recognition Highlight */}
      <section className="section-alt section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-8 bg-white rounded-lg shadow-sm">
            <svg
              className="w-16 h-16 text-primary mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Top 2% Scientists Worldwide</h2>
            <p className="text-lg text-slate-700">
              Ranked by Stanford University for 3 consecutive years (2020-2022)
            </p>
          </div>
        </div>
      </section>

      {/* Main Applicant Grants */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">Grants & Funding - Main Applicant</h2>
          <div className="space-y-6">
            {cvData.grants.mainApplicant.map((grant, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{grant.name}</h3>
                <div className="space-y-2 text-slate-700">
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
      <section className="section-alt section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">Grants & Funding - Co-Applicant</h2>
          <div className="space-y-6">
            {cvData.grants.coApplicant.map((grant, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{grant.name}</h3>
                <div className="space-y-2 text-slate-700">
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
