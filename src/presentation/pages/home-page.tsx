import '../../styles/HomePage.css';
import { useProjects } from '../hooks/use-projects';
import { ProjectComponent } from '../components/projects/Project';
import { Cursor } from '@/presentation/components/terminal/cursor';
import Navigation from '../components/navigation/Navigation';
import { Contact } from '@/presentation/components/contact/contact';

const HomePage = () => {
  const { projects, loading, error } = useProjects('jvmazagao');
  const user = 'j_mazagao@server';

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo"></div>
        <Navigation />
      </header>

      <section className="hero-section" id="about">
        <div className="hero-content">
          <div className="terminal">
            <div className="terminal-header">
              <span>terminal - bash - 80x24</span>
            </div>
            <div className="terminal-body">
              <p className="prompt">
                <span className="prompt-user">{user}</span>:
                <span className="prompt-path">~</span>$ whoami
              </p>
              <p className="response">João Victor Mazagão</p>

              <p className="prompt">
                <span className="prompt-user">{user}</span>:
                <span className="prompt-path">~</span>$ cat&nbsp;about.txt
              </p>
              <p className="response">
                Backend Engineer with a focus on system design and scalable architectures.
              </p>

              <p className="prompt">
                <span className="prompt-user">{user}</span>:
                <span className="prompt-path">~</span>$ ls&nbsp;projects/
              </p>
              <p className="response">
                {loading ? 'Loading…' : error ? 'Error loading projects' : projects.map(p => p.name).join(' ')}
              </p>

              <p className="prompt">
                <span className="prompt-user">{user}</span>:
                <span className="prompt-path">~</span>$&nbsp;
                <Cursor />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects" id="projects">
        <h2 className="section-title"># Recent Projects</h2>
        {loading ? (
          <p className="loading">Loading projects...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectComponent key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      <Contact />
    </div>
  );
};

export default HomePage; 