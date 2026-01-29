import cvData from '../data/cv_data.json'

export default function Research() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Research</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Nanomedicine and Sustainable Materials for Cancer and Infectious Diseases
          </p>
        </div>
      </section>

      {/* Research Vision */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Research Vision & Interests</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {cvData.researchVision}
          </p>
        </div>
      </section>

      {/* Scientific Excellence */}
      <section className="bg-white section-container">
        <h2 className="text-center mb-12">Scientific Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cvData.scientificExcellence.map((area, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-primary mb-4">{area.area}</h3>
              <p className="text-gray-700 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Impact */}
      <section className="bg-blue-50 section-container">
        <h2 className="text-center mb-12">Research Impact Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.totalPublications}
            </div>
            <div className="text-gray-600">Total Publications</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.totalCitations.toLocaleString()}+
            </div>
            <div className="text-gray-600">Total Citations</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.hIndex}
            </div>
            <div className="text-gray-600">H-Index</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.i10Index}
            </div>
            <div className="text-gray-600">i10-Index</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          <div className="card text-center bg-white">
            <div className="text-3xl font-bold text-primary mb-2">
              {cvData.bibliometrics.firstAuthorship}
            </div>
            <div className="text-gray-600">First Authorship</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-3xl font-bold text-primary mb-2">
              {cvData.bibliometrics.correspondingAuthorship}
            </div>
            <div className="text-gray-600">Corresponding Authorship</div>
          </div>
          <div className="card text-center bg-white">
            <div className="text-3xl font-bold text-primary mb-2">
              {cvData.bibliometrics.highestImpactFactor}
            </div>
            <div className="text-gray-600">Highest Impact Factor</div>
          </div>
        </div>
      </section>

      {/* Collaborative Research */}
      <section className="section-container">
        <h2 className="text-center mb-12">International Collaborations</h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {cvData.collaborativeResearch.map((para, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
