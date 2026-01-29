import { Link } from 'react-router-dom'
import cvData from '../data/cv_data.json'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {cvData.personalInfo.name.replace(', PhD', '')}
              </h1>
              <div className="text-xl text-gray-600 mb-6">
                <p className="font-semibold text-primary">{cvData.personalInfo.title}</p>
                <p className="mt-2">{cvData.personalInfo.department}</p>
                <p>{cvData.personalInfo.section}</p>
                <p className="font-medium mt-2">{cvData.personalInfo.institution}</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/research" className="btn-primary">
                  Explore Research
                </Link>
                <Link to="/publications" className="btn-secondary">
                  View Publications
                </Link>
                <a
                  href="/portfolio_website/data/Priyanka%20Singh_CV_2026_Updated%20Jan%2023.pdf"
                  download
                  className="btn-secondary"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/portfolio_website/data/33FAD25E-02D6-4FF0-92AC-F9C018FF70B6_1_105_c.jpeg"
                alt="Dr. Priyanka Singh"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Vision Snapshot */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Research Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {cvData.researchVision}
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-gray-50 section-container">
        <h2 className="text-center mb-12">Research Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.totalPublications}
            </div>
            <div className="text-gray-600">Publications</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.totalCitations.toLocaleString()}+
            </div>
            <div className="text-gray-600">Citations</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.hIndex}
            </div>
            <div className="text-gray-600">H-Index</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {cvData.bibliometrics.highestImpactFactor}
            </div>
            <div className="text-gray-600">Highest IF</div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-8">Career Highlights</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {cvData.careerHighlights}
          </p>
        </div>
      </section>

      {/* Scientific Excellence Areas */}
      <section className="bg-blue-50 section-container">
        <h2 className="text-center mb-12">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.scientificExcellence.map((area, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-primary mb-3">{area.area}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Publications Highlight */}
      <section className="section-container bg-white">
        <h2 className="text-center mb-12">Selected Recent Publications</h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {cvData.selectedPublications.slice(0, 5).map((pub, index) => (
            <div key={index} className="card">
              <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
              <p className="text-gray-700">
                <span className="italic">{pub.journal}</span>
                {pub.volume && ` ${pub.volume}`}
                {pub.pages && `, ${pub.pages}`}
                {pub.year && ` (${pub.year})`}
                {pub.impactFactor && (
                  <span className="ml-2 text-primary font-medium">IF: {pub.impactFactor}</span>
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/publications" className="btn-primary">
            View All Publications
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Interested in Collaboration?</h2>
          <p className="text-xl mb-8">
            I'm always open to discussing new research opportunities, collaborations, and PhD/Postdoc positions.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
