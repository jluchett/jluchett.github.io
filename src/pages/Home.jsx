import React from 'react';
import '../styles/home.css';
import profileImage from '../assets/yo.jpg'

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="intro">
        <img src={profileImage} alt="Profile" className="profileImage" />
        <h1>Hola, soy Jorge Luchetta</h1>
        <p>Bienvenido a mi portafolio. Soy un desarrollador web Full Stack apasionado por la tecnología, con habilidades en frontend y backend.</p>
      </div>
    </div>
  );
}

export default Home;
