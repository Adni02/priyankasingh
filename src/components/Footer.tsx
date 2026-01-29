import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Dr. Priyanka Singh</h3>
            <p className="text-sm">
              Senior Researcher & Group Leader<br />
              Department of Health Technology<br />
              DTU Health, Technical University of Denmark
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/research" className="hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/supervision" className="hover:text-white transition-colors">
                  Supervision & Teaching
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://orcid.org/0000-0001-7654-5339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="mr-2">ORCID</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/priya4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="mr-2">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/citations?user=CHvd3SUAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="mr-2">Google Scholar</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {currentYear} Dr. Priyanka Singh. All rights reserved.
          </p>
          <p className="mt-2 text-gray-500">
            Privacy Note: Contact information is protected. Use the contact form to reach out.
          </p>
        </div>
      </div>
    </footer>
  )
}
