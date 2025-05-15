import React from 'react';
import '@/styles/AboutPage.css';
import { Contact } from '@/presentation/components/contact/contact';
const AboutPage: React.FC = () => {
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
            <h2># About Me</h2>
            <p>
              I'm a Backend Engineer with expertise in designing and building robust, 
              scalable systems. My focus is on creating efficient, maintainable 
              solutions for complex problems.
            </p>
            
            <h3>## Skills</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill.name}>- {skill.name}</li>
              ))}
            </ul>
            
            <h3>## Technologies</h3>
            <div className="tech-groups">
              <div className="tech-group">
                <h4>### Languages</h4>
                <ul>
                  {languages.map((language) => (
                    <li key={language.name}>- {language.name}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tech-group">
                <h4>### Databases</h4>
                <ul>
                  {databases.map((database) => (
                    <li key={database.name}>- {database.name}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tech-group">
                <h4>### Tools</h4>
                <ul>
                  {tools.map((tool) => (
                    <li key={tool.name}>- {tool.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <h3>## Work Experience</h3>
            <div className="experience">
              <div className="experience-header">
                <span className="company">Example Company</span>
                <span className="duration">2021 - Present</span>
              </div>
              <p className="position">Senior Backend Engineer</p>
              <ul>
                <li>- Designed and implemented high-throughput API services</li>
                <li>- Led database optimization efforts resulting in 60% performance improvement</li>
                <li>- Architected distributed data processing pipeline</li>
              </ul>
            </div>
            
            <div className="experience">
              <div className="experience-header">
                <span className="company">Previous Company</span>
                <span className="duration">2018 - 2021</span>
              </div>
              <p className="position">Backend Developer</p>
              <ul>
                <li>- Developed microservices for e-commerce platform</li>
                <li>- Implemented authentication and authorization systems</li>
                <li>- Contributed to migration from monolith to microservices</li>
              </ul>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 