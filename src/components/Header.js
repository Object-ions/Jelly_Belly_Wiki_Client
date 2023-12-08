import React from "react";
import LogoFav from "../img/fivcon-final.png";

const Header = () => {
  return (
    <div className="main-nav">
      <div className="container">
        <img src={LogoFav} alt="Jwlly Belly Wiki" />
        <ul>
          <li className="current">
            <a href="#">Home</a>
          </li>
          <li className="">
            <a href="#">Beans</a>
          </li>
          <li className="">
            <a href="#">Facts</a>
          </li>
          <li className="">
            <a href="#">Recipes</a>
          </li>
          <li className="">
            <a href="#">About</a>
          </li>
          <li className="">
            <a href="#">Official Website</a>
          </li>
        </ul>
        <ul>
          <li className="">
            <a href="#">API</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
