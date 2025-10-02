import React from "react";
import footerData from "../utils/footer.json";

const Footer = () => {
  const { footers } = footerData;
  return (
    <footer className="fk-grotesk-neue bg-[#2c3e50] py-20 flex flex-col md:flex-row md:items-start items-center justify-center text-center w-full">
      {footers.map((section) => (
  <div key={section.heading} className="w-full md:w-1/3 px-2">
          <h3 className="text-[#F5D7E3] font-semibold">{section.heading}</h3>
          <ul className="text-[14px]">
            {section.items.map((item, i) => (
              <li key={i} className="text-[#ffffffcc] p-1">
                <a href={item.url}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
