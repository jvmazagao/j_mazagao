import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">~/j_mazagao</div>
        <nav className="navigation">
          <a href="#about">whoami</a>
          <a href="#projects">projects</a>
          <a href="#blog">blog</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <div className="terminal">
            <div className="terminal-header">
              <span>terminal - bash - 80x24</span>
            </div>
            <div className="terminal-body">
              <p className="prompt"><span className="prompt-user">user@server</span>:<span className="prompt-path">~</span>$ whoami</p>
              <p className="response">Your Name</p>
              <p className="prompt"><span className="prompt-user">user@server</span>:<span className="prompt-path">~</span>$ cat about.txt</p>
              <p className="response">Backend Engineer with a focus on system design and scalable architectures.</p>
              <p className="prompt"><span className="prompt-user">user@server</span>:<span className="prompt-path">~</span>$ ls projects/</p>
              <p className="response">project1.md project2.md project3.md</p>
              <p className="prompt"><span className="prompt-user">user@server</span>:<span className="prompt-path">~</span>$ _</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2 className="section-title"># Recent Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A backend service for handling high-throughput data processing</p>
            <div className="project-meta">
              <span className="project-tech">Node.js</span>
              <span className="project-tech">PostgreSQL</span>
              <span className="project-tech">Redis</span>
            </div>
            <a href="#" className="project-link">View Source &gt;</a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Distributed system for real-time analytics</p>
            <div className="project-meta">
              <span className="project-tech">Go</span>
              <span className="project-tech">Kafka</span>
              <span className="project-tech">Elasticsearch</span>
            </div>
            <a href="#" className="project-link">View Source &gt;</a>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>API gateway with authentication and rate limiting</p>
            <div className="project-meta">
              <span className="project-tech">Python</span>
              <span className="project-tech">FastAPI</span>
              <span className="project-tech">JWT</span>
            </div>
            <a href="#" className="project-link">View Source &gt;</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 