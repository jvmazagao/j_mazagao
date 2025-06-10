import React, { useEffect } from 'react';
import { useContentful } from '../hooks/use-contentful';
import '@/styles/AboutPage.css';
import { Contact } from '@/presentation/components/contact/contact';
import { Experience } from '@/presentation/components/experience/experience';
import { useAnalytics } from '@/analytics/react/hooks/use-analytics';
import { PageLocations } from '@/analytics/events';


const AboutPage: React.FC = () => {
  const { content, loading, error } = useContentful();
  const { trackPageView, isReady } = useAnalytics();

  useEffect(() => {
    if(isReady) {
      trackPageView('About Page', PageLocations.ABOUT);
    }
  }, [trackPageView, isReady]);

  if (loading) {
    return (
      <div className="about-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about-container">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <div className="about-container">
      <h1 className="about-title">~/about</h1>

      <div className="terminal-section">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
          </div>
          <div className="terminal-title">about.sh</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-content">
            <h2>{content.about.title}</h2>
            <p>{content.about.description}</p>

            <h3>## Skills</h3>
            <ul>
              {content.about.skills.map((skill) => (
                <li key={skill}>- {skill}</li>
              ))}
            </ul>

            <h3>## Technologies</h3>
            <div className="tech-groups">
              <div className="tech-group">
                <h4>{content.about.technologies.languages.name}</h4>
                <ul>
                  {content.about.technologies.languages.items.map((language) => (
                    <li key={language}>- {language}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-group">
                <h4>{content.about.technologies.databases.name}</h4>
                <ul>
                  {content.about.technologies.databases.items.map((database) => (
                    <li key={database}>- {database}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-group">
                <h4>{content.about.technologies.tools.name}</h4>
                <ul>
                  {content.about.technologies.tools.items.map((tool) => (
                    <li key={tool}>- {tool}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3>{content.about.experience.title}</h3>
            {content.about.experience.items.map((experience) => (
              <Experience key={experience.company} {...experience} />
            ))}
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default AboutPage;
