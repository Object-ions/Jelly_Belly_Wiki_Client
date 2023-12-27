import "./ExampleRecpComb.css";
import React from "react";
import Recipe from "./Recipe";
import Combination from "./Combination";

const ExampleRecpComb = () => {
  return (
    <div className="container">
      <div className="ExampleRecpComb">
        <div className="ExampleRecipe">
          <h2>Explore More ...</h2>
          <Recipe />
          <Combination />
        </div>
      </div>
    </div>
  );
};

export default ExampleRecpComb;
