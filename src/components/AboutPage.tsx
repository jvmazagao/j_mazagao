import React from 'react';
import '../styles/AboutPage.css';

const AboutPage: React.FC = () => {
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
              <li>- Distributed Systems Architecture</li>
              <li>- API Design and Development</li>
              <li>- Database Performance Optimization</li>
              <li>- Microservices</li>
              <li>- DevOps and Infrastructure as Code</li>
            </ul>
            
            <h3>## Technologies</h3>
            <div className="tech-groups">
              <div className="tech-group">
                <h4>### Languages</h4>
                <ul>
                  <li>- Go</li>
                  <li>- Python</li>
                  <li>- TypeScript/JavaScript</li>
                  <li>- Rust (learning)</li>
                </ul>
              </div>
              
              <div className="tech-group">
                <h4>### Databases</h4>
                <ul>
                  <li>- PostgreSQL</li>
                  <li>- MongoDB</li>
                  <li>- Redis</li>
                  <li>- Elasticsearch</li>
                </ul>
              </div>
              
              <div className="tech-group">
                <h4>### Tools</h4>
                <ul>
                  <li>- Docker</li>
                  <li>- Kubernetes</li>
                  <li>- CI/CD</li>
                  <li>- Terraform</li>
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
            
            <h3>## Contact</h3>
            <p>
              Feel free to reach out to me through any of the platforms below:
            </p>
            <ul className="contact-links">
              <li>- Email: <a href="mailto:example@example.com">example@example.com</a></li>
              <li>- GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/username</a></li>
              <li>- LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/username</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 