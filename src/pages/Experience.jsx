// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-container">
      <h1 className="title">Experiencia</h1>
      <div className="experience">
        <div className="job">
          <h3 className="job-title">Especialista en soporte técnico - R&J Tecnology SAS</h3>
          <p className="job-duration">Diciembre 2019 – junio 2021</p>
          <p className="job-description">Servicio de soporte técnico, hardware, sistemas operativos, cámaras IP, resolución de problemas de redes.</p>
        </div>
        <div className="job">
          <h3 className="job-title">Auxiliar de sistemas - Surte Screen Barranquilla</h3>
          <p className="job-duration">Febrero 2014 – agosto 2017</p>
          <p className="job-description">Creación de aplicación para el manejo de inventario y facturación de productos comercializados, sistematización de procesos, mantenimiento de equipos de cómputo.</p>
        </div>
        <div className="job">
          <h3 className="job-title">Aux. de sistemas, Coordinador de Inventarios - Icoltrans S.A.S</h3>
          <p className="job-duration">Julio 2008 – marzo 2013</p>
          <p className="job-description">Manejo de programas especiales, creación de backups, mantenimientos de equipos, realizar ingresos, salidas y reajustes, pasar informes de inventarios, creación de remesas y liquidación de fletes.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
