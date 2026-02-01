import { Link } from 'react-router-dom'
import cvData from '../data/cv_data.json'

export default function Home() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50/40 via-white to-cyan-50/20 pt-12 pb-20 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h1 className="mb-6 leading-tight">
                {cvData.personalInfo.name.replace(', PhD', '')}
              </h1>
              <div className="space-y-3 mb-8 text-lg">
                <p className="text-primary font-semibold text-xl">{cvData.personalInfo.title}</p>
                <p className="text-slate-700">{cvData.personalInfo.department}</p>
                <p className="text-slate-600">{cvData.personalInfo.section}</p>
                <p className="text-slate-700 font-medium">{cvData.personalInfo.institution}</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/research" className="btn-primary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Explore Research
                </Link>
                <Link to="/publications" className="btn-secondary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C6.248 6.253 2 10.998 2 16.5S6.248 26.747 12 26.747s10-4.745 10-10.247S17.752 6.253 12 6.253z" />
                  </svg>
                  View Publications
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-up-delay-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-3xl transform -translate-y-4" />
              <img
                src="/priyankasingh/data/33FAD25E-02D6-4FF0-92AC-F9C018FF70B6_1_105_c.jpeg"
                alt="Dr. Priyanka Singh"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Vision Snapshot */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <h2 className="mb-4">Research Vision</h2>
            <div className="section-header-rule"></div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed text-center italic max-w-prose mx-auto mt-10">
            "{cvData.researchVision}"
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-alt section-container">
        <div className="section-header">
          <h2 className="mb-4">Research Impact</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.totalPublications}
            </div>
            <div className="text-slate-600">Publications</div>
            <p className="text-xs text-slate-500 mt-2">Peer-reviewed articles</p>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.totalCitations.toLocaleString()}+
            </div>
            <div className="text-slate-600">Citations</div>
            <p className="text-xs text-slate-500 mt-2">Research impact</p>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.hIndex}
            </div>
            <div className="text-slate-600">H-Index</div>
            <p className="text-xs text-slate-500 mt-2">Academic contribution</p>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.highestImpactFactor}
            </div>
            <div className="text-slate-600">Highest IF</div>
            <p className="text-xs text-slate-500 mt-2">Top journal</p>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <h2 className="mb-4">Career Highlights</h2>
            <div className="section-header-rule"></div>
          </div>
          <div className="card-accent mt-10">
            <p className="text-lg text-slate-700 leading-relaxed max-w-prose mx-auto">
              {cvData.careerHighlights}
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Excellence Areas */}
      <section className="section-alt section-container">
        <div className="section-header">
          <h2 className="mb-4">Areas of Expertise</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cvData.scientificExcellence.map((area, index) => (
            <div
              key={index}
              className="card card-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100 text-slate-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{area.area}</h3>
                  <p className="text-slate-600">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Publications Highlight */}
      <section className="section-container bg-white">
        <div className="section-header">
          <h2 className="mb-4">Selected Recent Publications</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="max-w-5xl mx-auto space-y-4">
          {cvData.selectedPublications.slice(0, 5).map((pub, index) => (
            <div
              key={index}
              className="card card-hover group hover:border-primary/30 transition-all duration-300"
            >
              <p className="text-sm font-medium text-primary mb-2">{pub.authors}</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="italic">{pub.journal}</span>
                {pub.volume && <span>Vol. {pub.volume}</span>}
                {pub.pages && <span>pp. {pub.pages}</span>}
                {pub.year && <span className="text-slate-500">({pub.year})</span>}
                {pub.impactFactor && (
                  <span className="ml-auto px-3 py-1 bg-slate-100 text-slate-700 font-medium rounded-full">
                    IF: {pub.impactFactor}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/publications" className="btn-primary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View All Publications
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto card-accent bg-gradient-to-r from-purple-50/40 to-cyan-50/20 text-center py-12">
          <h2 className="mb-6">Interested in Collaboration?</h2>
          <p className="text-xl mb-8 text-slate-700 leading-relaxed max-w-prose mx-auto">
            I'm always open to discussing new research opportunities, collaborations, and PhD/Postdoc positions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
