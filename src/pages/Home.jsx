import React from 'react';
import '../styles/home.css';
import profileImage from '../assets/Yo2.png'
import About from '../pages/About'

const Home = () => {
  return (
    <div id='home' className="homeContainer">
      <div className="intro">
        <img src={profileImage} alt="Profile" className="profileImage" />
        <h1>Hola, soy Jorge Luchetta</h1>
        <p>Bienvenido a mi portafolio. Soy un desarrollador web Full Stack apasionado por la tecnología, con habilidades en frontend y backend.</p>
        <About/>
      </div>
    </div>
  );
}

export default Home;
