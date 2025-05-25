import type { Project } from '../../../domain/entities/project';
import './Project.css';

export const ProjectComponent = ({ project }: { project: Project }) => {
  return (
    <div className="project-card retro-neon retro-crt">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div>
        {project.language && (
          <span className="project-tech">{project.language}</span>
        )}
        {project.topics && project.topics.map((topic, index) => (
          <span key={index} className="project-tech">{topic}</span>
        ))}
      </div>
      <div className="project-stats">
        <span className="project-stat">⭐ {project.stars}</span>
        <span className="project-stat">🕒 {new Date(project.updatedAt).toLocaleDateString()}</span>
      </div>
      <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
        View Source &gt;
      </a>
    </div>
  );
};