import React from "react";

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
        <ul>
          <h3>Check out all endpoints</h3>
          <li>
            <a href="">Beans</a>
          </li>
          <li>
            <a href="">Recipes</a>
          </li>
          <li>
            <a href="">History</a>
          </li>
          <li>
            <a href="">Combinations</a>
          </li>
          <li>
            <a href="">Facts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
