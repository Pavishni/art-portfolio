import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/img/background.webp';
import colorPencil from '../assets/img/HagridDrawing.jpg';
import softpastel from '../assets/img/Bharatanatyam.jpg';
//import { Link } from "react-router-dom";
import './Home.css';
import ColorPencils from "./ColorPencils";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img className="home-container-img" src={background} alt="Background" />
        <Navigation />
      </div>

    </>
  );
};

const Navigation = () => {
  return (
    <ul className='home-nav'>
      <li className="collections">
        <Link to="/colorPencils">
          <p>Color pencil portraits</p>
          <img src={colorPencil} alt="Color pencil" />
        </Link>
      </li>
      <li className="collections">
        <Link to="/colorPencils">
        <p>Soft Pastels</p>
          <img src={softpastel} alt="Color pencil" />
        </Link>
      </li>
      <li className="collections">
        <Link to="/colorPencils">
        <p>Oil paintings</p>
          <img src={colorPencil} alt="Color pencil" />
        </Link>
      </li>
      <li className="collections">
        <Link to="/colorPencils">
        <p>Acrylic paintings</p>
          <img src={colorPencil} alt="Color pencil" />
        </Link>
      </li>
    </ul>
  );
};

export default Home;
