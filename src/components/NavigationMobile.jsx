import React from "react";
import { categories } from "../utils/categories.js";
import { Link } from "react-router-dom";

const NavigationMobile = () => {
  return (
    <div className="block md:hidden px-4">
      {categories.map((category) => (
        <Link
          key={category?.catId}
          to={`/categories/${category?.catId}`}
          className="block my-4 mx-8"
        >
          <div className="bg-linear-to-r from-[#ffe4d6] to-[#e3f2fd] rounded-2xl shadow-md overflow-hidden">
            <div className="bg-gray-100 flex items-center justify-center">
              <img
                className="object-contain"
                src={category?.image}
                alt={category?.name}
              />
            </div>

            <div className="p-3">
              <p className="text-lg font-semibold text-gray-800 text-center italic">
                {category?.name}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationMobile;
