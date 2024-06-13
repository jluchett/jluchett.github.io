// App.js
import React from 'react';
/* import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact'; */
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      {/* <Home />
      <About />
      <Projects />
      <Experience />
      <Contact /> */}
    </div>
  );
}

export default App;

