import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex  justify-between shadow-lg bg-black text-gray-300">
      <p className="text-3xl m-5">
        <Link to="/">P a v i s h n i A r t s</Link>
      </p>
      <div className="flex p-5 text-xl">
        <p className="px-2 mt-1">
          <Link to="/">Home</Link>
        </p>
        <p className="px-2 mt-1">
          <Link to="/about">About</Link>
        </p>
        <p className="px-2 mt-1">
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
