import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './presentation/pages/home-page'
import BlogPage from './presentation/pages/blog-page'
import ProjectsPage from './presentation/pages/projects-page'
import AboutPage from './presentation/pages/about-page'
import Layout from './presentation/components/Layout'

function App() {
  return (
    <Router basename='/j_mazagao'>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
