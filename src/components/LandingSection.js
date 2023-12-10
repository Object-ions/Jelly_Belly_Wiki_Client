import React from "react";
import BeanLogo from "../img/new-logo-with-3d-look2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const LandingSection = () => {
  return (
    <div className="LandingSection">
      <div className="container">
        <div className="img-wrapper">
          <img src={BeanLogo} alt="Jelly Belly Wiki Logo" />
        </div>
        <div className="text-wrapper">
          <h1>Welcome to the World of Jelly Belly:</h1>
          <h3>A Rainbow of Flavors Awaits!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias enim
            maxime placeat tenetur deserunt adipisci laborum perferendis
            incidunt aspernatur. Ex.
          </p>
          <a className="btn" href="http://">
            Click here for more info
          </a>
        </div>
      </div>
      <div className="bottom-description">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            quibusdam sed. Molestias eius rerum officiis quibusdam ea dolores
            voluptas atque?
          </p>
        </div>
        <FontAwesomeIcon icon={faArrowDown} fade size="2x" />
      </div>
    </div>
  );
};

export default LandingSection;
