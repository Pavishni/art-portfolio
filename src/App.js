import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import ColorPencils from './components/ColorPencils';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ColorPencils" element={<ColorPencils />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
