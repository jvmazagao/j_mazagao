import React from 'react';
import '../../styles/ProjectsPage.css';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'High-Throughput API Service',
      description: 'A backend service for handling high-throughput data processing with horizontal scaling capabilities.',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      link: 'https://github.com/username/project1'
    },
    {
      id: 2,
      title: 'Distributed Analytics System',
      description: 'Real-time analytics platform that processes event streams and provides aggregated metrics with low latency.',
      tech: ['Go', 'Kafka', 'Elasticsearch', 'Kubernetes'],
      link: 'https://github.com/username/project2'
    },
    {
      id: 3,
      title: 'API Gateway',
      description: 'Centralized gateway service providing authentication, rate limiting, and request routing for microservices.',
      tech: ['Python', 'FastAPI', 'JWT', 'Redis'],
      link: 'https://github.com/username/project3'
    },
    {
      id: 4,
      title: 'Database Sharding Library',
      description: 'A library for dynamically sharding database queries across multiple database instances.',
      tech: ['TypeScript', 'PostgreSQL', 'MySQL'],
      link: 'https://github.com/username/project4'
    },
    {
      id: 5,
      title: 'Message Queue System',
      description: 'Lightweight message queue implementation focused on reliability and performance.',
      tech: ['Rust', 'gRPC', 'RocksDB'],
      link: 'https://github.com/username/project5'
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">~/projects</h1>
      <p className="projects-description">A collection of my backend engineering projects</p>
      
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-list">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Source &gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 