import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css'; // Si tienes estilos globales

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<home />} />
      </Routes>
    </Router>
  );
}

export default App;
