import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Layout.css';
import { useContacts } from '../hooks/use-contacts';
import { useAnalytics } from '@/analytics/react/hooks/use-analytics';
import { Events, PageLocations } from '@/analytics/events';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const contacts = useContacts()
  const { trackClick } = useAnalytics()

  const handleNavigationClick = (location: string) => {
    trackClick(location, Events.NAVIGATION_CLICK)
  }

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-logo">~/j_mazagao</div>
        <nav className="layout-navigation">
          <Link to="/" onClick={() => handleNavigationClick(PageLocations.HOME)}>home</Link>
          <Link to="/blog" onClick={() => handleNavigationClick(PageLocations.BLOG)}>blog</Link>
          <Link to="/projects" onClick={() => handleNavigationClick(PageLocations.PROJECTS)}>projects</Link>
          <Link to="/about" onClick={() => handleNavigationClick(PageLocations.ABOUT)}>about</Link>
        </nav>
      </header>
      <main className="layout-content">
        {children}
      </main>

      <footer className="layout-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} - built with vim and coffee</p>
          <div className="social-links">
            {contacts.map((contact) => (
              <a href={contact.value} target="_blank" rel="noopener noreferrer" key={contact.title} title={contact.title} onClick={() => trackClick(contact.title, 'contact')} >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;