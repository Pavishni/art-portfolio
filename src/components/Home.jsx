import React from "react";
import Header from "./Header";
import Navigation from "./Navigation"
import Banner from "./Banner";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Carousel />
    </div>
  );
};

export default Home;
