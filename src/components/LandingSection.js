import React from "react";
// import BeanLogo from "../img/new-logo-with-3d-look2.png";
import BeanLogo from "../img/animation-pinks.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
            The User Interface of this website makes full use of the API's
            database, showcasing one approach to design by utilizing all the
            endpoints and their various options. Check out the API documentation
          </p>

          <Link to={"/api/"} className="btn">
            {" "}
            Click here for more info
          </Link>
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
