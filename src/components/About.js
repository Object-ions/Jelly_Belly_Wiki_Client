import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about container">
      <div>
        <h3>What to find in this API?</h3>
        <hr />
        <div className="info-numbers">
          <div>
            <h3>100 +</h3>
            <p>Jelly belly beans</p>
          </div>
          <div>
            <h3>7</h3>
            <p>Properties on each bean</p>
          </div>
          <div>
            <h3>100</h3>
            <p>Facts on Jelly Belly</p>
          </div>
          <div>
            <h3>10</h3>
            <p>Jelly Belly landmarks</p>
          </div>
          <div>
            <h3>25</h3>
            <p>Recipes</p>
          </div>
          <div>
            <h3>35</h3>
            <p>Jelly Belly Combinations</p>
          </div>
        </div>
      </div>
      <div className="info-numbers-last">
        <h3>
          All data reflecting from the original
          <a href="http://www.jellybelly.com">Jelly Belly Website</a>
        </h3>
        <ul id="about-ul">
          <h3>Check out all endpoints</h3>
          <li>
            <Link to="/beans">
              Beans
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
          <li>
            <Link to="/recipes">
              Recipes
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
          <li>
            <Link to="/facts">
              Facts
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
          <li>
            <Link to="/combinations">
              Combinations
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
          <li>
            <Link to="/history">
              History
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
