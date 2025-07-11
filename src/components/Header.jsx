import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex font-['EB_Garamond'] justify-between shadow-lg mt-5 ">
      <p className="text-3xl p-3">
        <Link to="/">P a v i s h n i A r t s</Link>
      </p>
      <div className="flex p-5 text-xl">
        <p className="px-2">
          <Link to="/">Home</Link>
        </p>
        <p className="px-2">
          <Link to="/about">About</Link>
        </p>
        <p className="px-2">
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
