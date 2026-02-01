import cvData from '../data/cv_data.json'

export default function Research() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50/40 via-white to-cyan-50/20 py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Research</h1>
          <p className="text-center text-xl text-slate-600 max-w-3xl mx-auto">
            Nanomedicine and Sustainable Materials for Cancer and Infectious Diseases
          </p>
        </div>
      </section>

      {/* Research Vision */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Research Vision & Interests</h2>
          <p className="text-lg text-slate-700 leading-relaxed max-w-prose">
            {cvData.researchVision}
          </p>
        </div>
      </section>

      {/* Scientific Excellence */}
      <section className="bg-white section-container">
        <div className="section-header">
          <h2 className="mb-4">Scientific Excellence</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cvData.scientificExcellence.map((area, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-primary mb-4">{area.area}</h3>
              <p className="text-slate-700 leading-relaxed max-w-prose">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Impact */}
      <section className="section-alt section-container">
        <div className="section-header">
          <h2 className="mb-4">Research Impact Metrics</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.totalPublications}
            </div>
            <div className="text-slate-600">Total Publications</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.totalCitations.toLocaleString()}+
            </div>
            <div className="text-slate-600">Total Citations</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.hIndex}
            </div>
            <div className="text-slate-600">H-Index</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.i10Index}
            </div>
            <div className="text-slate-600">i10-Index</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          <div className="card text-center bg-white">
            <div className="text-3xl font-bold text-primary mb-2">
              {cvData.bibliometrics.firstAuthorship}
            </div>
            <div className="text-slate-600">First Authorship</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-3xl font-bold text-primary mb-2">
              {cvData.bibliometrics.correspondingAuthorship}
            </div>
            <div className="text-slate-600">Corresponding Authorship</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-3xl font-bold text-primary mb-2">
              {cvData.bibliometrics.highestImpactFactor}
            </div>
            <div className="text-slate-600">Highest Impact Factor</div>
          </div>
        </div>
      </section>

      {/* Collaborative Research */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="mb-4">International Collaborations</h2>
          <div className="section-header-rule"></div>
        </div>
        <div className="mt-10"></div>
        <div className="max-w-5xl mx-auto space-y-6">
          {cvData.collaborativeResearch.map((para, index) => (
            <p key={index} className="text-slate-700 leading-relaxed max-w-prose mx-auto">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Research Collaboration Banner */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto card-accent bg-gradient-to-r from-purple-50/40 to-cyan-50/20 text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Interested in Research Collaboration?</h3>
          <p className="text-slate-700 mb-6 max-w-prose mx-auto">
            I'm always open to discussing potential research collaborations and innovative projects.
          </p>
          <a 
            href="mailto:priyanka.singh@dal.ca?subject=Research Collaboration Inquiry"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
