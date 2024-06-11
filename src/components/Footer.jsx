import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Jorge Luchetta. Todos los derechos reservados.</p>
      <div className="socialLinks">
        <a href="https://www.linkedin.com/in/jorgeluchettaa18" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Añadir más enlaces si es necesario */}
      </div>
    </footer>
  );
};

export default Footer;
