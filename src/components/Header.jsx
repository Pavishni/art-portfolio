import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="space-grotesk flex justify-between px-2 md:px-36 shadow-xl bg-[#F8F9FA] py-2.5">
      <div className="font-bold text-center text-[#f5d7e3]">
        <Link to="/">
          P A V I S H N I<br />
          ARTS
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <button onClick={() => setToggle(!toggle)}>
        <Bars3Icon className="md:hidden text-black h-5" />
      </button>
    </header>
  );
};

export default Header;
