import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Layout.css';
import { useContacts } from '../hooks/use-contacts';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { email, github, linkedin } = useContacts()
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-logo">~/j_mazagao</div>
        <nav className="layout-navigation">
          <Link to="/">home</Link>
          <Link to="/blog">blog</Link>
          <Link to="/projects">projects</Link>
          <Link to="/about">about</Link>
        </nav>
      </header>
      <main className="layout-content">
        {children}
      </main>
      
      <footer className="layout-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} - built with vim and coffee</p>
          <div className="social-links">
            <a href={github} target="_blank" rel="noopener noreferrer">github</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 