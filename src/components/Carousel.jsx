import graphite from "../assets/images/graphite.jpg";
import SoftPastel from "../assets/images/SoftPastel.jpg";
import colorPencilTiger from "../assets/images/colorPencilTiger.jpg";
import ColorPencil from "../assets/images/ColorPencil.jpg";
import { useEffect, useState } from "react";

const images = [graphite, colorPencilTiger, SoftPastel, ColorPencil];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[1000px] h-[700px] bg-neutral-900 flex items-center justify-center overflow-hidden shadow-lg">
        <img
          src={images[index]}
          className="max-h-full max-w-full object-contain"
          alt={`Slide ${index + 1}`}
        />
      </div>
    </div>
  );
};

export default Carousel;
