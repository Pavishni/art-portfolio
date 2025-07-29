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
      className={`fixed top-0 left-0 w-full z-50 bg-[#8A5A32] text-[#1E1400] shadow-md font-serif transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full px-2 sm:px-4 py-4">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center lg:hidden focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open categories menu"
          >
            <svg className="w-7 h-7 text-[#FAEACD]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <p className="hidden lg:block text-2xl tracking-wide text-[#FAEACD]">
            <Link to="/">P a v i s h n i  A r t s</Link>
          </p>
        </div>
        <div className="flex gap-6 text-lg ml-auto text-[#FAEACD]">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
      {open && (
        <div className="sm:hidden px-4 pb-2 animate-fade-in-down bg-[#E0C385] border-b-8 border-[#3A2B10]">
          {categories.map((cat) => (
            <NavLink
              key={cat.path}
              to={cat.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-[#1E1400] transition-colors duration-200 hover:bg-[#8A5A32] hover:text-[#FAEACD] ${isActive ? "bg-[#8A5A32] text-[#FAEACD]" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {cat.name}
            </NavLink>
          ))}
        </div>
      )}
      <div className="w-full h-2 bg-gradient-to-b from-[#8A5A32] via-[#E0C385] to-[#E0C385] hidden sm:block" />
      <div className="w-full bg-[#E0C385] hidden lg:flex flex-wrap justify-start gap-2 sm:gap-4 md:gap-6 py-2 px-4 border-b-2 border-[#3A2B10]">
        {categories.map((cat) => (
          <NavLink
            key={cat.path}
            to={cat.path}
            className={({ isActive }) =>
              `inline-block px-3 py-1 rounded text-[#1E1400] transition-colors duration-200 hover:bg-[#8A5A32] hover:text-[#FAEACD] ${isActive ? "bg-[#8A5A32] text-[#FAEACD]" : ""}`
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
