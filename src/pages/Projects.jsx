// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/projects.css';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    { title: 'Proyecto 1', description: 'Descripción del proyecto 1', technologies: ['React', 'Node.js'], link: '#' },
    { title: 'Proyecto 2', description: 'Descripción del proyecto 2', technologies: ['Java', 'Spring'], link: '#' },
  ];

  return (
    <section id="projects" className="projects-container">
      <h1 className="title">Proyectos</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
