import { useEffect, useRef, useState } from "react";
import graphite from "../assets/images/graphite.jpg";
import SoftPastel from "../assets/images/SoftPastel.jpg";
import colorPencilTiger from "../assets/images/colorPencilTiger.jpg";
import ColorPencil from "../assets/images/ColorPencil.jpg";

const images = [graphite, colorPencilTiger, SoftPastel, ColorPencil];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleRadioChange = (i) => {
    setIndex(i);
    resetTimer(); // restart timer on manual change
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2a1c00]">
      {/* Carousel container */}
      <div className="w-full max-w-full md:max-w-[1000px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-[#2a1c00] flex items-center justify-center overflow-hidden shadow-lg rounded-2xl mt-10 px-0 sm:px-2">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-contain transition-opacity duration-500"
        />
      </div>

      {/* Radio buttons */}
      <div className="flex space-x-4 mb-10 mt-4">
        {images.map((_, i) => (
          <label key={i}>
            <input
              type="radio"
              name="carousel"
              checked={index === i}
              onChange={() => handleRadioChange(i)}
              className="hidden"
            />
            <div
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
                index === i ? "bg-[#bfa76f]" : "bg-gray-400"
              }`}
            ></div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Carousel;