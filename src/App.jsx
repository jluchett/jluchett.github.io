import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="appContainer">
        <Header />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/about' element={<About/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
