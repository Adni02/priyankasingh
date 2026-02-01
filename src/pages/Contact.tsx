import { useState } from 'react'
import Typewriter from '../components/Typewriter'

export default function Contact() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  })

  // Email obfuscation - split into parts
  const getEmail = () => {
    const part1 = 'prnksingh'
    const part2 = '254'
    const part3 = 'gmail'
    const part4 = 'com'
    return `${part1}${part2}@${part3}.${part4}`
  }

  const handleCopyEmail = () => {
    const email = getEmail()
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 3000)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const email = getEmail()
    const subject = encodeURIComponent(formData.subject || 'Contact from Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\n${formData.message}`
    )
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50/40 via-white to-cyan-50/20 py-16">
        <div className="section-container">
          <h1 className="text-center mb-4">Contact</h1>
          <p className="text-center text-xl text-slate-600 max-w-3xl mx-auto">
            <Typewriter text="Get in Touch" speed={50} />
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <h2 className="mb-6">Send a Message</h2>
            <p className="text-slate-700 mb-6 max-w-prose">
              Please fill out the form below. Clicking "Send Message" will open your email client
              with a pre-filled message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., Research Collaboration, PhD Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                
                <button
                  type="button"
                  onClick={() => setShowEmailModal(true)}
                  className="btn-secondary"
                >
                  Show Email
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-alt section-container">
        <div className="max-w-5xl mx-auto">
          <div className="section-header">
            <h2 className="mb-4">Contact Information</h2>
            <div className="section-header-rule"></div>
          </div>
          <div className="mt-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office */}
            <div className="card bg-white">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Office Address</h3>
                  <p className="text-slate-700">
                    Department of Health Technology<br />
                    Experimental & Translational Immunology Section<br />
                    DTU Health<br />
                    Technical University of Denmark<br />
                    Lyngby, Denmark
                  </p>
                </div>
              </div>
            </div>

            {/* Online */}
            <div className="card bg-white">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Online Presence</h3>
                  <div className="space-y-2">
                    <a
                      href="https://orcid.org/0000-0001-7654-5339"
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
                      href="https://linkedin.com/in/priya4"
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
                    <a
                      href="https://scholar.google.com/citations?user=CHvd3SUAAAAJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      Google Scholar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-100 rounded-lg text-sm text-slate-700 text-center">
            <svg className="w-5 h-5 inline mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Privacy Note: Contact information is protected against automated scraping.
            Use the form above to reach out securely.
          </div>
        </div>
      </section>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Email Address</h3>
              <button
                onClick={() => setShowEmailModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <p className="text-lg font-mono text-gray-900 break-all">{getEmail()}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCopyEmail}
                className="flex-1 btn-primary"
              >
                {copySuccess ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Email
                  </>
                )}
              </button>
              
              <button
                onClick={() => setShowEmailModal(false)}
                className="flex-1 btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
