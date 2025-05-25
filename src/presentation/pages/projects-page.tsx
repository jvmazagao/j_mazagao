import React from 'react';
import '../../styles/ProjectsPage.css';
import { useProjects } from '../hooks/use-projects';
import { ProjectComponent } from '../components/projects/Project';

const ProjectsPage: React.FC = () => {
  const { projects, loading, error } = useProjects('jvmazagao');
  


  return (
    <div className="projects-container">
      <h1 className="projects-title">~/projects</h1>
      <p className="projects-description">A collection of my engineering projects</p>
      {loading ? (
        <p className="loading">Loading projects...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : ( 
      <div className="projects-list">
        {projects?.map(project => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </div>
      )}
    </div>
  );
};

export default ProjectsPage; 