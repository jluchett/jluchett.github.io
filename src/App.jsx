// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <h2>My Portafolio</h2>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <Home/>
    </div>
  );
}

export default App;

