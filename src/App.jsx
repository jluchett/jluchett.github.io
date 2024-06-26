// eslint-disable-next-line no-unused-vars
import React from 'react';

import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

