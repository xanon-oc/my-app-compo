import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>This is A Header Component</h1>
      <nav>
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About Us</a>
      </nav>
    </div>
  );
};

export default Header;
