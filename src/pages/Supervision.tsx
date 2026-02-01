import cvData from '../data/cv_data.json'
import Typewriter from '../components/Typewriter'

export default function Supervision() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50/40 via-white to-cyan-50/20 py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Supervision & Teaching</h1>
          <p className="text-center text-xl text-slate-600 max-w-3xl mx-auto">
            <Typewriter text="Mentoring the Next Generation of Researchers" speed={40} />
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-700 leading-relaxed max-w-prose mx-auto">
            At DTU, I supervise and have supervised 10 researchers across postdoctoral, PhD, masters, and internship levels,
            fostering excellence in nanomedicine and biomaterials research.
          </p>
        </div>
      </section>

      {/* Postdocs */}
      <section className="bg-white section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">Postdoctoral Researchers</h2>
          <div className="space-y-6">
            {cvData.supervision.postdocs.map((postdoc, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {postdoc.name || postdoc.position}
                    </h3>
                    <p className="text-primary mb-2">{postdoc.institution}</p>
                    <p className="text-slate-700 mb-2"><strong>Grant:</strong> {postdoc.grant}</p>
                    <p className="text-slate-700 mb-2"><strong>Project:</strong> {postdoc.project}</p>
                    <div className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {postdoc.period}
                      {postdoc.status && (
                        <span className="ml-3 px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          {postdoc.status}
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

      {/* PhD Students */}
      <section className="section-alt section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">PhD Students</h2>
          <div className="space-y-6">
            {cvData.supervision.phds.map((phd, index) => (
              <div key={index} className="card bg-white">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {phd.name || phd.position}
                    </h3>
                    <p className="text-primary mb-2">{phd.institution}</p>
                    <p className="text-slate-700 mb-2"><strong>Grant:</strong> {phd.grant}</p>
                    {phd.project && (
                      <p className="text-slate-700 mb-2"><strong>Project:</strong> {phd.project}</p>
                    )}
                    {phd.thesis && (
                      <p className="text-slate-700 mb-2"><strong>Thesis:</strong> {phd.thesis}</p>
                    )}
                    <div className="flex items-center text-sm text-slate-600">
                      {phd.period && (
                        <>
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {phd.period}
                        </>
                      )}  
                      {phd.status && (
                        <span className="ml-3 px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          {phd.status}
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

      {/* Visiting PhDs */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">Visiting PhD Researchers</h2>
          <div className="space-y-6">
            {cvData.supervision.visitingPhds.map((vphd, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{vphd.name}</h3>
                    <p className="text-slate-700 mb-1"><strong>From:</strong> {vphd.from}</p>
                    <p className="text-primary mb-2">{vphd.institution}</p>
                    {vphd.project && (
                      <p className="text-slate-700 mb-2"><strong>Project:</strong> {vphd.project}</p>
                    )}
                    <div className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {vphd.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masters & Interns */}
      <section className="section-alt section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8">Master's Students & Research Interns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cvData.supervision.masters.map((ms, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{ms.name}</h3>
                <p className="text-primary text-sm mb-2">{ms.institution}</p>
                {ms.thesis && (
                  <p className="text-slate-700 text-sm mb-2"><strong>Thesis:</strong> {ms.thesis}</p>
                )}
                <p className="text-xs text-slate-600">{ms.period}</p>
              </div>
            ))}
            {cvData.supervision.interns.map((intern, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{intern.name}</h3>
                <p className="text-primary text-sm mb-2">{intern.institution}</p>
                <p className="text-slate-700 text-sm mb-2"><strong>Grant:</strong> {intern.grant}</p>
                {intern.project && (
                  <p className="text-slate-700 text-sm mb-2"><strong>Project:</strong> {intern.project}</p>
                )}
                <p className="text-xs text-slate-600">{intern.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto card-accent bg-gradient-to-r from-purple-50/40 to-cyan-50/20 text-center py-12">
          <h2 className="mb-6">Join Our Research Team</h2>
          <p className="text-xl mb-8 text-slate-700 leading-relaxed max-w-prose mx-auto">
            Interested in pursuing PhD or Postdoctoral research in nanomedicine and biomaterials?
            I'm always looking for motivated researchers to join the team.
          </p>
          <a 
            href="/priyankasingh/contact"
            className="btn-primary rounded-full px-8 py-3"
          >
            Express Interest
          </a>
        </div>
      </section>
    </div>
  )
}
