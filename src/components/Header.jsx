import React from "react";

const Header = () => {
  return (
    <div className="flex">
      <p>Pavishni Arts</p>
      <div className="font-garamond">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p style={{ fontFamily: "EB Garamond, serif" }}>
          Inline style test — is this Garamond?
        </p>
      </div>
    </div>
  );
};

export default Header;
