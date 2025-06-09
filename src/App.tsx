import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './presentation/pages/about-page';
import BlogPage from './presentation/pages/blog-page';
import HomePage from './presentation/pages/home-page';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="container">
            <nav className="nav">
              <Link to="/" className="logo">jm</Link>
              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <p className="text-subtle text-center">
              © {new Date().getFullYear()} João Mazagão. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
