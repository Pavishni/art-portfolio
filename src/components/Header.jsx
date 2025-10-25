import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="fk-grotesk-neue flex justify-between px-2 md:px-36 shadow-lg bg-[#F8F9FA] py-2.5 fixed top-0 w-full z-50">
      <div className="font-bold text-center text-[#f5d7e3]">
        <Link to="/">
          P A V I S H N I<br />
          ARTS
        </Link>
      </div>
      <div className="flex flex-col md:flex-row pt-2.5">
        <button className="md:hidden left-0 pl-20" onClick={() => setToggle(!toggle)}>
          {!toggle ? (
            <Bars3Icon className="text-black h-5 block" />
          ) : (
            <XMarkIcon className="text-black h-5 block left-0" />
          )}
        </button>
        <div className={`${toggle ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row">
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
      </div>
    </header>
  );
};

export default Header;