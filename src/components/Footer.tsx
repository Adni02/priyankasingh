import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = '2026-02-01'

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-serif font-semibold">Dr. Priyanka Singh</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Senior Researcher & Group Leader<br />
              <span className="block mt-2">Department of Health Technology</span>
              DTU Health, Technical University of Denmark
            </p>
          </div>

          {/* Research Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-serif">Research</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/research" className="hover:text-white transition-colors">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-white transition-colors">
                  Awards & Grants
                </Link>
              </li>
              <li>
                <Link to="/supervision" className="hover:text-white transition-colors">
                  Supervision
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-serif">Academic</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/awards" className="hover:text-white transition-colors">
                  Awards & Grants
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-white transition-colors">
                  Leadership & Talks
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-serif">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://orcid.org/0000-0001-7654-5339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z" />
                  </svg>
                  ORCID
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/citations?user=CHvd3SUAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z" />
                  </svg>
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/priya4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors inline-flex items-center gap-2 group">
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Dr. Priyanka Singh. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-slate-500">
                Last updated: {lastUpdated}
              </p>
              <span className="text-slate-700">•</span>
              <p className="text-xs text-slate-500">
                Designed for excellence &amp; digital accessibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
