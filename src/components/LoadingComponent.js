import React from "react";
import happyBean from "../img/happy-bean.png";

const LoadingComponent = () => {
  return (
    <div className="error">
      <h1>loading ...</h1>
      <img src={happyBean} alt="sad-bean" />
    </div>
  );
};

export default LoadingComponent;
