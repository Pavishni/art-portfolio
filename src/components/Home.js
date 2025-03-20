import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import background from '../assets/img/background-blue.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src={background} alt="Background" />
    </div>
  );
};

export default Home;
