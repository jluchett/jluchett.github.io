import React from 'react';
import '../styles/home.css';
import profileImage from '../assets/Yo2.png';

function Home() {
  return (
    <section id="home" className="section">
      <img src={profileImage} alt="Profile" className="profileImage" />
      <h1>Hola, soy Jorge Luchetta</h1>
      <p>Bienvenido a mi portafolio. Soy un desarrollador web Full Stack apasionado por la tecnología, con habilidades en frontend y backend.</p>
    </section>
  );
}

export default Home;
