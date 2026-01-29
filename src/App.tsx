import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Experience from './pages/Experience'
import Grants from './pages/Grants'
import Awards from './pages/Awards'
import Leadership from './pages/Leadership'
import Talks from './pages/Talks'
import Supervision from './pages/Supervision'
import Publications from './pages/Publications'
import Contact from './pages/Contact'

function App() {
  return (
    <Router basename="/portfolio_website">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/grants" element={<Grants />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/supervision" element={<Supervision />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
