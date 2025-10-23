import { artworks } from "../utils/dataCarousel.js";

const Carousel = () => {
  return (
    <div>
      {artworks.map((artwork) => (
        <div key={artwork.id} className="flex flex-wrap">
          <img src={artwork.image} alt={artwork.title} className="w-3/4 flex flex-wrap" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
