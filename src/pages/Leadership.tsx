import cvData from '../data/cv_data.json'
import Typewriter from '../components/Typewriter'

export default function Leadership() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50/40 via-white to-cyan-50/20 py-24">
        <div className="section-container">
          <h1 className="text-center mb-6">Leadership & Talks</h1>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto">
            <Typewriter text="Contributing to the Scientific Community Through Service & Knowledge Sharing" speed={40} />
          </p>
        </div>
      </section>

      {/* Leadership Roles */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12">Leadership & Academic Service</h2>
          <div className="space-y-4">
            {cvData.leadership.map((role, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{role.role}</h3>
                    <p className="text-slate-700 mb-2">{role.organization}</p>
                    <p className="text-sm text-primary font-medium">{role.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invited Talks & Presentations */}
      <section className="section-alt section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12">Invited Talks & Conference Presentations</h2>
          <div className="space-y-4">
            {cvData.talks.map((talk, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{talk.title}</h3>
                    {talk.description && (
                      <p className="text-slate-700 mb-3">{talk.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      {talk.date && (
                        <span className="inline-flex items-center gap-1 text-primary font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {talk.date}
                        </span>
                      )}
                      {talk.period && (
                        <span className="inline-flex items-center gap-1 text-primary font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {talk.period}
                        </span>
                      )}
                      {talk.status && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
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

      {/* Key Contributions */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <h2 className="mb-4">Key Contributions</h2>
            <div className="section-header-rule"></div>
          </div>
          <div className="mt-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-3">Regional</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Coordinator</div>
              <p className="text-slate-600">IEEE Nanotechnology Council - Women in Nanotechnology</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-3">20+</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Journals</div>
              <p className="text-slate-600">Peer-reviewed Journals as Reviewer</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary mb-3">Editor</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">High-Impact</div>
              <p className="text-slate-600">Multiple High-Impact Journals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="section-alt section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-10">Community Engagement</h2>
          <div className="card-accent">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Social Media Educator</h3>
                <p className="text-lg text-slate-700 leading-relaxed max-w-prose">
                  Active mentor on LinkedIn, providing guidance on scholarships and study-abroad opportunities.
                  Sharing knowledge and experiences to help aspiring researchers navigate their academic journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Invitation Banner */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto card-accent bg-gradient-to-r from-purple-50/40 to-cyan-50/20 text-center py-12">
          <h2 className="mb-6">Invite Me for a Talk or Presentation</h2>
          <p className="text-xl mb-8 text-slate-700 leading-relaxed max-w-prose mx-auto">
            Interested in having me share exciting updates and insights in the nanobiotechnology sector? 
            I'm available for keynote talks, panel discussions, and academic presentations.
          </p>
          <a 
            href="mailto:prisi@dtu.dk"
            className="btn-primary rounded-full px-8 py-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
