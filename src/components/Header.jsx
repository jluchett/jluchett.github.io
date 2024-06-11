import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Jorge Luchetta</h1>
      </div>
      <nav className="nav">
        <NavLink exact="true" to="/" className={({ isActive }) => isActive ? "active" : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ''}>Sobre mí</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ''}>Proyectos</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ''}>Experiencia</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ''}>Contacto</NavLink>
      </nav>
    </header>
  );
};

export default Header;

