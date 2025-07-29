import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const categories = [
  { name: "Color pencil portraits", path: "/category/color-pencil-portraits" },
  { name: "Oil painting", path: "/category/oil-painting" },
  { name: "Acrylic painting", path: "/category/acrylic-painting" },
  { name: "Graphite portraits", path: "/category/graphite-portraits" },
  { name: "Charcoal", path: "/category/charcoal" },
  { name: "Digital painting", path: "/category/digital-painting" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scroll down -> hide
      } else {
        setShowHeader(true); // scroll up -> show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#bfa76f] text-[#2a1c00] shadow-md font-serif transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full px-2 sm:px-4 py-4">
        <div className="flex items-center gap-2">
          {/* Hamburger for mobile/tablet */}
          <button
            className="flex items-center lg:hidden focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open categories menu"
          >
            <svg className="w-7 h-7 text-[#2a1c00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <p className="hidden lg:block text-2xl tracking-wide">
            <Link to="/">Pavishni Arts</Link>
          </p>
        </div>
        <div className="flex gap-6 text-lg ml-auto">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
      {/* Dropdown menu for mobile */}
      {open && (
        <div className="sm:hidden px-4 pb-2 animate-fade-in-down bg-[#bfa76f] border-b-2 border-[#2a1c00]">
          {categories.map((cat) => (
            <NavLink
              key={cat.path}
              to={cat.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-[#2a1c00] transition-colors duration-200 hover:bg-[#2a1c00] hover:text-[#bfa76f] ${isActive ? "bg-[#2a1c00] text-[#bfa76f]" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {cat.name}
            </NavLink>
          ))}
        </div>
      )}
      {/* Horizontal navbar for desktop/tablet - full width */}
      <div className="w-full bg-[#a28645] hidden lg:flex flex-wrap justify-start gap-2 sm:gap-4 md:gap-6 py-2 px-4 border-b-2 border-[#2a1c00]">
        {categories.map((cat) => (
          <NavLink
            key={cat.path}
            to={cat.path}
            className={({ isActive }) =>
              `inline-block px-3 py-1 rounded text-[#2a1c00] transition-colors duration-200 hover:bg-[#2a1c00] hover:text-[#bfa76f] ${isActive ? "bg-[#2a1c00] text-[#bfa76f]" : ""}`
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
