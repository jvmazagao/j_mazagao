import React from 'react';
import '@/styles/AboutPage.css';
import { Contact } from '@/presentation/components/contact/contact';
import { getAbout } from '@/infra/local/about';
import { Experience } from '../components/experience/experience';

const AboutPage: React.FC = () => {
  const about = getAbout();
  
  const skills = [
    {
      name: 'Distributed Systems Architecture',
    },
    {
      name: 'API Design and Development',
    },
    {
      name: 'Database Performance Optimization',
    },
    {
      name: 'Microservices',
    },
    {
      name: 'Migration from monolith to microservices',
    },
  ]

  const languages = [
    { name: 'Python' },
    { name: 'TypeScript/JavaScript' },
    { name: 'Java' },
    { name: 'Rust' },
    { name: 'Go' },
  ]

  const databases = [
    { name: 'PostgreSQL' },
    { name: 'MySQL' },
    { name: 'MongoDB' },
    { name: 'Redis' },
  ]

  const tools = [
    { name: 'Docker' },
    { name: 'CI/CD' },
    { name: 'Git' },
  ]
  
  
  return (
    <div className="about-container">
      <h1 className="about-title">~/about</h1>
      
      <div className="terminal-section">
        <div className="terminal-header">
          <span>about.md - vim - 80x24</span>
        </div>
        <div className="terminal-body">
          <div className="terminal-content">
            <h2>{about.title}</h2>
            <p>
              {about.description}
            </p>
            
            <h3>## Skills</h3>
            <ul>
              {about.skills.map((skill) => (
                <li key={skill}>- {skill}</li>
              ))}
            </ul>
            
            <h3>## Technologies</h3>
            <div className="tech-groups">
              <div className="tech-group">
                <h4>{about.technologies.languages.name}</h4>
                <ul>
                  {about.technologies.languages.items.map((language) => (
                    <li key={language}>- {language}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tech-group">
                <h4>{about.technologies.databases.name}</h4>
                <ul>
                  {about.technologies.databases.items.map((database) => (
                    <li key={database}>- {database}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tech-group">
                <h4>{about.technologies.tools.name}</h4>
                <ul>
                  {about.technologies.tools.items.map((tool) => (
                    <li key={tool}>- {tool}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <h3>{about.experience.title}</h3>
            {about.experience.items.map((experience) => (
              <Experience key={experience.company} {...experience} />
            ))}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 