import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { artworks } from "../utils/dataCarousel.js";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index === artworks.length - 1 ? 0 : index + 1);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? artworks.length - 1 : index - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev === artworks.length - 1 ? 0 : prev + 1);
    }, 3000);
    return () =>clearInterval(interval);
  }, [artworks.length]);

  return (
    <div className="relative w-full max-w-xl mx-auto my-6">
      <div className="aspect-[4/3] items-center flex justify-center bg-gray-200 overflow-hidden rounded-2xl">
        <img
          src={artworks[index]?.image}
          alt={artworks[index]?.title}
          className="object-contain h-full w-full transition-opacity duration-700"
        />
      </div>
      <div className="flex justify-between">
        <button
          className="absolute left-3 top-1/2 bg-gray-200 hover:bg-gray-400/70 rounded-full opacity-100 cursor-pointer"
          onClick={prevSlide}
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          className="absolute right-3 top-1/2 bg-gray-200 hover:bg-gray-400/70 rounded-full opacity-100 cursor-pointer"
          onClick={nextSlide}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center gap-2 my-4 bottom-4">
        {artworks.map((art, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              index === i ? "bg-gray-800 w-8" : "bg-gray-400  hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
