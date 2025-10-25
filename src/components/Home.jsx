import React from "react";
import Header from "./Header";
import Navigation from "./Navigation"
import Banner from "./Banner";
import Carousel from "./Carousel";
import Footer from "./Footer";
import NavigationMobile from "./NavigationMobile";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Carousel />
      <NavigationMobile />
      <Footer />
    </div>
  );
};

export default Home;
