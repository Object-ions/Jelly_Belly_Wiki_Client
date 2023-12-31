import "./DisplayAbout.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import AboutAddition from "../AboutAddition";

const DisplayAbout = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  return (
    <div className={`about ${isAboutPage ? "full-screen" : ""}`}>
      <div className="container">
        <div>
          <h3>What to find in this API?</h3>
          <hr />
          <div className="info-numbers">
            <div>
              <h3>100 +</h3>
              <p>Jelly belly beans</p>
            </div>
            <div>
              <h3>8</h3>
              <p>Properties on each bean</p>
            </div>
            <div>
              <h3>99 +</h3>
              <p>Facts on Jelly Belly</p>
            </div>
            <div>
              <h3>20 +</h3>
              <p>Milestones in the Jelly Belly History</p>
            </div>
            <div>
              <h3>25 +</h3>
              <p>Recipes</p>
            </div>
            <div>
              <h3>50 +</h3>
              <p>Jelly Belly Combinations</p>
            </div>
          </div>
        </div>
        <div className="info-numbers-last">
          All data reflecting from the original
          <a href="http://www.jellybelly.com">
            Jelly Belly Website
            <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
          <ul id="about-ul">
            <h3>Check out all endpoints</h3>
            <li>
              <Link to="/api/">
                Beans
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </li>
            <li>
              <Link to="/api/">
                Recipes
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </li>
            <li>
              <Link to="/api/">
                Facts
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </li>
            <li>
              <Link to="/api/">
                Combinations
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </li>
            <li>
              <Link to="/api/">
                History
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </li>
          </ul>
        </div>
        {isAboutPage ? <AboutAddition /> : ""}
      </div>
    </div>
  );
};

export default DisplayAbout;
