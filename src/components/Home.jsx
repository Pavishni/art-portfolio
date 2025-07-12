import Carousel from "./Carousel";
import FloatingCandlesBackground from "./FloatingCandlesBackground";
import parchment from "../assets/images/parchment.png";

const Home = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Candles */}
      <div className="absolute inset-0 z-0 h-[150vh]">
        <FloatingCandlesBackground />
      </div>

      {/* Parchment Image */}
      <div className="relative z-10 w-9/12 flex justify-center">
        <img src={parchment} alt="Parchment" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;
