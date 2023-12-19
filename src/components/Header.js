import React from "react";
import LogoFav from "../img/fivcon-final.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <Link to="/">
          <img src={LogoFav} alt="Jwlly Belly Wiki" />
        </Link>

        <ul>
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
            <Link to="/combinations">Combinations</Link>
          </li>
          <li className="">
            <Link to="/history">History</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li className="api">
            <Link to="/api">API Doc</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
