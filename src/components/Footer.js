import React from "react";
import LogoFav from "../img/fivcon-final.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div>
          <h3>
            <img src={LogoFav} alt="Jwlly Belly Wiki" />
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            laboriosam ut quis pariatur quo architecto sed amet adipisci aliquid
            deserunt?
          </p>
        </div>
        <div>
          <h3>Site Map</h3>
          <ul className="list">
            <li>
              <a href="">About Jelly Belly Wiki</a>
            </li>
            <li>
              <a href="">API Documentation</a>
            </li>
            <li>
              <a href="">Contact Information</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Copyrights</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            laboriosam ut quis pariatur quo architecto sed amet adipisci aliquid
            deserunt?
          </p>
        </div>
        <div className="social-links">
          <h3>Check Out</h3>
          <a href="">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover-fade"
              size="2xl"
            />
          </a>
          <a href="">
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
