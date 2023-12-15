import React from "react";

const About = () => {
  return (
    <div className="about container">
      <div>
        <h2>What to find in this API?</h2>
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
      <div>
        <h3>
          All data reflecting from the original
          <a href="http://www.jellybelly.com">Jelly Belly Website</a>
        </h3>
      </div>
    </div>
  );
};

export default About;
