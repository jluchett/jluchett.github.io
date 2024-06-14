// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Jorge Luchetta. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jorgeluchettaa18" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:jluchett@hotmail.com">Correo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

