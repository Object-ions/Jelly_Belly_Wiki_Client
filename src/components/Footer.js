import "./Footer.css";
import React from "react";
import LogoFav from "../img/fivcon-final.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div>
          <h3>
            <img src={LogoFav} alt="Jwlly Belly Wiki" />
          </h3>

          <p>
            All data in this application and its API are sourced from the
            official Jelly Belly website. None of the content here is claimed as
            original; it's all credited to and derived from Jelly Belly's
            official resources.
          </p>
        </div>
        <div>
          <h3>Site Map</h3>
          <ul className="list">
            <li>
              <Link to={"/about"}>About Jelly Belly Wiki</Link>
            </li>
            <li>
              <Link to={"/api"}>API Documentation</Link>
            </li>
            <li>
              <Link to={"/beans"}>Beans</Link>
            </li>
            <li>
              <Link to={"/facts"}>Facts</Link>
            </li>
            <li>
              <Link to={"/recipes"}>Recipes</Link>
            </li>
            <li>
              <Link to={"/combinations"}>Combinations</Link>
            </li>
            <li>
              <Link to={"/history"}>History</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Data Accuracy</h3>
          <p>
            Despite efforts to ensure accuracy, this resource may contain errors
            or inaccuracies and should not be the sole basis for critical
            decisions, especially those related to health.
          </p>
        </div>
        <div className="social-links">
          <h3>Check Out</h3>
          <a
            target="blank"
            href="https://github.com/Object-ions/Jelly-Belly-Wiki"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hover-fade"
              size="2xl"
            />
          </a>
          <a
            target="blank"
            href="https://discord.com/users/1063873143053238414"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              className="hover-fade"
              size="2xl"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover-fade"
              size="2xl"
            />
          </a>
        </div>
        <div>
          <p>Copyright &copy; 2023 All Rights Reserved, Object-ions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
