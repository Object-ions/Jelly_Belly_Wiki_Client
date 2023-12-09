import React from "react";
import LogoFav from "../img/fivcon-final.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <img src={LogoFav} alt="Jwlly Belly Wiki" />
        <ul>
          <li className="current">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/beans">Beans</Link>
          </li>
          <li className="">
            <Link to="/facts">Facts</Link>
          </li>
          <li className="">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <a target="_blank" rel="noreferrer" href="http://jellybelly.com">
              Official Website
            </a>
          </li>
        </ul>
        <ul>
          <li className="">
            <Link to="/api">API</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
