import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'
import ProjectsPage from './components/ProjectsPage'
import AboutPage from './components/AboutPage'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
