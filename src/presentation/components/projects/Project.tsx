import { Events } from '@/analytics/events';
import type { Project } from '../../../domain/entities/project';
import './Project.css';
import { useAnalytics } from '@/analytics/react/hooks/use-analytics';

export const ProjectComponent = ({ project }: { project: Project }) => {
  const { trackClick } = useAnalytics()

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
      <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer" onClick={() => trackClick(project.name, Events.NAVIGATION_CLICK)}>
        View Source &gt;
      </a>
    </div>
  );
};