import cvData from '../data/cv_data.json'

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">About</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Senior Researcher & Group Leader in Nanomedicine and Biomaterials
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="mb-6">Current Position</h2>
            <div className="space-y-4 text-gray-700 mb-12">
              <p>
                <strong className="text-primary">{cvData.personalInfo.title}</strong><br />
                {cvData.personalInfo.department}<br />
                {cvData.personalInfo.section}<br />
                {cvData.personalInfo.institution}<br />
                {cvData.personalInfo.location}
              </p>
            </div>

            <h2 className="mb-6">Career Highlights</h2>
            <p className="text-gray-700 leading-relaxed mb-12">{cvData.careerHighlights}</p>

            <h2 className="mb-6">Research Vision</h2>
            <p className="text-gray-700 leading-relaxed">{cvData.researchVision}</p>
          </div>

          <div>
            <div className="card sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-6">
                {cvData.education.map((edu, index) => (
                  <div key={index}>
                    <div className="font-semibold text-primary">{edu.degree}</div>
                    <div className="text-gray-700">{edu.institution}</div>
                    <div className="text-sm text-gray-500">{edu.year}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">External Links</h3>
              <div className="space-y-3">
                <a
                  href={cvData.personalInfo.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  ORCID Profile
                </a>
                <a
                  href={`https://${cvData.personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Research */}
      <section className="bg-gray-50 section-container">
        <h2 className="text-center mb-12">Collaborative Research Excellence</h2>
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
