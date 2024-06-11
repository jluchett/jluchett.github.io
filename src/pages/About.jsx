import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="aboutContainer">
      <h2>Sobre mí</h2>
      <p>
        Soy desarrollador Full Stack con experiencia en frontend (React, Redux, Bootstrap, HTML5, CSS3) y backend (Node.js, Express, Sequelize, Postgres, MongoDB).
        Además, tengo conocimientos en Visual Basic .NET, Python y Java. Me apasiona resolver problemas técnicos y crear soluciones innovadoras.
      </p>
      <h3>Habilidades</h3>
      <ul>
        <li>Desarrollo Web Full Stack</li>
        <li>Resolución de problemas</li>
        <li>Metodología ágil SCRUM</li>
        <li>Trabajo en equipo</li>
        <li>Comunicación efectiva</li>
        <li>Cumplimiento de objetivos</li>
      </ul>
    </div>
  );
}

export default About;
