import React from "react";
import BeanLogo from "../img/new-logo-with-3d-look2.png";

const LandingSection = () => {
  return (
    <div className="LandingSection">
      <div className="container">
        <div className="img-wrapper">
          <img src={BeanLogo} alt="Jelly Belly Wiki Logo" />
        </div>
        <div>
          <h1>Welcome to the World of Jelly Belly:</h1>
          <h1>A Rainbow of Flavors Awaits!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias enim
            maxime placeat tenetur deserunt adipisci laborum perferendis
            incidunt aspernatur. Ex.
          </p>
          <a className="btn" href="#">
            Click here for more info
          </a>
        </div>
      </div>
      <div>3D model</div>
    </div>
  );
};

export default LandingSection;
