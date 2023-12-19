import React from "react";
import happyBean from "../img/happy-bean.png";

const LoadingComponent = () => {
  return (
    <div className="loading">
      <h1>Loading ...</h1>
      <img src={happyBean} alt="sad-bean" />
    </div>
  );
};

export default LoadingComponent;
