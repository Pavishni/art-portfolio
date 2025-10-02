import React from "react";
import categoriesData from "../utils/categories.json";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { categories } = categoriesData;
  return (
    <nav className="hidden md:block md:mt-5 bg-[#F8F9FA]">
      <ul className="flex ml-36">
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
