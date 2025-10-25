import React from "react";
import {categories} from "../utils/categories.js";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="hidden md:block md:mt-5 bg-[#F8F9FA] fixed top-16 w-full z-50">
      <ul className="flex mx-36">
        {categories.map((category, index) => (
          <Link key={category?.catId} to={"/categories/" + category?.catId}>
            <li>{category?.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
