import cvData from '../data/cv_data.json'
import Typewriter from '../components/Typewriter'

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50/40 via-white to-cyan-50/20 py-24">
        <div className="section-container">
          <h1 className="text-center mb-6">About</h1>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto">
            <Typewriter text="Senior Researcher & Group Leader in Nanomedicine and Biomaterials" speed={40} />
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Current Position */}
            <div>
              <h2 className="mb-8">Current Position</h2>
              <div className="card-accent">
                <div className="space-y-2 text-lg">
                  <p className="font-semibold text-primary text-xl">{cvData.personalInfo.title}</p>
                  <p className="font-medium text-slate-900">{cvData.personalInfo.department}</p>
                  <p className="text-slate-700">{cvData.personalInfo.section}</p>
                  <p className="font-medium text-slate-900 mt-3">{cvData.personalInfo.institution}</p>
                  <p className="text-slate-600">{cvData.personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Career Highlights */}
            <div>
              <h2 className="mb-8">Career Highlights</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 italic max-w-prose">
                "{cvData.careerHighlights}"
              </p>
            </div>

            {/* Research Vision */}
            <div>
              <h2 className="mb-8">Research Vision</h2>
              <div className="space-y-6">
                {cvData.researchVision.split('.').filter(s => s.trim()).map((sentence, index) => (
                  <p key={index} className="text-slate-700 leading-relaxed max-w-prose">
                    {sentence.trim()}.
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="card sticky top-24">
              <h3 className="text-2xl font-serif font-semibold mb-6 pb-4 border-b border-slate-200">Education</h3>
              <div className="space-y-8">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <div className="font-semibold text-slate-900">{edu.degree}</div>
                        <div className="text-slate-600 text-sm">{edu.institution}</div>
                        <div className="text-xs text-primary font-medium mt-1">{edu.year}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* External Links */}
              <h4 className="text-lg font-serif font-semibold mt-10 mb-6 pt-6 border-t border-slate-200">Connect</h4>
              <div className="space-y-3 flex flex-col">
                <a
                  href={cvData.personalInfo.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-accent rounded-lg font-medium transition-all duration-200"
                >
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M10 10h4M10 10v4M10 10l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  ORCID Profile
                  <svg className="w-4 h-4 ml-auto text-slate-600 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href={`https://${cvData.personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-accent rounded-lg font-medium transition-all duration-200"
                >
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                  </svg>
                  LinkedIn
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Research */}
      <section className="section-alt section-container">
        <div className="section-header">
          <h2 className="mb-4">Collaborative Research Excellence</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cvData.collaborativeResearch.map((para, index) => (
              <div key={index} className="card card-hover">
                <p className="text-slate-700 leading-relaxed max-w-prose">
                  {para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="mb-4">Work Experience</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {cvData.experience.map((exp, index) => (
              <div key={index} className="card relative">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-white hidden md:block"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium mt-1">{exp.institution}</p>
                  </div>
                  <div className="text-slate-600 font-medium mt-2 md:mt-0 md:text-right">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="section-alt section-container">
        <div className="section-header">
          <h2 className="mb-4">Professional Development & Certifications</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvData.certifications.map((cert, index) => (
            <div key={index} className="card bg-white">
              <h3 className="font-semibold text-slate-900 mb-2">{cert.name}</h3>
              <p className="text-primary">{cert.institution}</p>
              <p className="text-sm text-slate-600 mt-1">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
