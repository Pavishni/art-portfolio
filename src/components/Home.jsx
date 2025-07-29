import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1E1400] pt-20">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="fade-in mt-4">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Home;