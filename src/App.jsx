// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

