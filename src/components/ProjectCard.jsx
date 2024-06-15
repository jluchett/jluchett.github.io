// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/projectCard.css';


function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-description">{project.description}</p>
      <p className="card-technologies">Tecnologías: {project.technologies.join(', ')}</p>
      <a className="card-link" href={project.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
  );
}

export default ProjectCard;
