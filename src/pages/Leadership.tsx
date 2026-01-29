import cvData from '../data/cv_data.json'

export default function Leadership() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Leadership & Academic Service</h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the Scientific Community
          </p>
        </div>
      </section>

      {/* Leadership Roles */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {cvData.leadership.map((role, index) => (
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.role}</h3>
                    <p className="text-gray-700 mb-2">{role.organization}</p>
                    <p className="text-sm text-primary font-medium">{role.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="bg-gray-50 section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Key Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">Regional Coordinator</div>
                <p className="text-gray-700">IEEE Nanotechnology Council - Women in Nanotechnology</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-gray-700">Peer-reviewed Journals as Reviewer</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">Editor</div>
                <p className="text-gray-700">Multiple High-Impact Journals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Community Engagement</h2>
          <div className="card">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media Educator</h3>
                <p className="text-gray-700">
                  Active mentor on LinkedIn, providing guidance on scholarships and study-abroad opportunities.
                  Sharing knowledge and experiences to help aspiring researchers navigate their academic journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
