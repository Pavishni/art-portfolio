import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/img/background-blue.png';
import colorPencil from '../assets/img/HagridDrawing.jpg';
import softpastel from '../assets/img/Bharatanatyam.jpg';
//import { Link } from "react-router-dom";
import './Home.css';
import ColorPencils from "./ColorPencils";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img src={background} alt="Background" />
        <Navigation />
      </div>

    </>
  );
};

const Navigation = () => {
  return (
    <ul>
      <li className="collections">
        <Link to="/colorPencils">
          <img src={colorPencil} alt="Color pencil" />
        </Link>
      </li>
      <li className="collections">
        <Link to="/colorPencils">
          <img src={softpastel} alt="Soft Pastel" />
        </Link>
      </li>
      <li className="collections">
        <Link to="/colorPencils">
          <img src={colorPencil} alt="Color pencil" />
        </Link>
      </li>
      <li className="collections">
        <Link to="/colorPencils">
          <img src={colorPencil} alt="Color pencil" />
        </Link>
      </li>
    </ul>
  );
};

export default Home;
