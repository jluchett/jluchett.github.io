import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css"

const Header = () => {
  return (
    <header  className="headerContainer">
      <div className="logoContainer">
        <h1>Mi Portafolio</h1>
      </div>
      <nav className="nav">
        <ul className="navList">
          <li><Link to="/" className="navLink">Home</Link></li>
          <li><Link to="/about" className="navLink">Sobre mí</Link></li>
          <li><Link to="/projects" className="navLink">Proyectos</Link></li>
          <li><Link to="/experience" className="navLink">Experiencia</Link></li>
          <li><Link to="/contact" className="navLink">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
