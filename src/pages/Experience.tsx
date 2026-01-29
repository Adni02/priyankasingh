import cvData from '../data/cv_data.json'

export default function Experience() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Work Experience</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Professional Journey in Academic Research and Leadership
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {cvData.experience.map((exp, index) => (
              <div key={index} className="card relative">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-white hidden md:block"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium mt-1">{exp.institution}</p>
                  </div>
                  <div className="text-gray-600 font-medium mt-2 md:mt-0 md:text-right">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0 mt-1 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="bg-gray-50 section-container">
        <h2 className="text-center mb-12">Professional Development & Certifications</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvData.certifications.map((cert, index) => (
            <div key={index} className="card bg-white">
              <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-primary">{cert.institution}</p>
              <p className="text-sm text-gray-600 mt-1">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
