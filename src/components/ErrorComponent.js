import React from "react";
import errorImg from "../img/single-bean-filled-sad.png";

const ErrorComponent = ({ error }) => {
  return (
    <div className="error">
      <h1>Oh no! there's an error:</h1>
      <h1>{error}</h1>
      <img src={errorImg} />
    </div>
  );
};

export default ErrorComponent;
