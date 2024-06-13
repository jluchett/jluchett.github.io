import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>My Portafolio</h1>
      </div>
      <nav className="nav">
        <a href="/" className={({ isActive }) => isActive ? "active" : ''}>Home</a>
        <a href="#about" className={({ isActive }) => isActive ? "active" : ''}>Sobre mí</a>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ''}>Proyectos</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ''}>Experiencia</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ''}>Contacto</NavLink>
      </nav>
    </header>
  );
};

export default Header;

