import cvData from '../data/cv_data.json'

export default function Awards() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Awards & Recognition</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Honors and Achievements in Academic Excellence
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cvData.awards.map((award, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-primary mb-1">{award.conferredBy}</p>
                    <p className="text-sm text-gray-600">
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
      <section className="bg-blue-50 section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-8 bg-white rounded-lg shadow-lg">
            <svg
              className="w-16 h-16 text-primary mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Top 2% Scientists Worldwide</h2>
            <p className="text-lg text-gray-700">
              Ranked by Stanford University for 3 consecutive years (2020-2022)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
