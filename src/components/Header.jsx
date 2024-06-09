import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Importar el archivo CSS como módulo

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <h1>Mi Portafolio</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.navLink}>Home</Link></li>
          <li><Link to="/about" className={styles.navLink}>Sobre mí</Link></li>
          <li><Link to="/projects" className={styles.navLink}>Proyectos</Link></li>
          <li><Link to="/experience" className={styles.navLink}>Experiencia</Link></li>
          <li><Link to="/contact" className={styles.navLink}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
