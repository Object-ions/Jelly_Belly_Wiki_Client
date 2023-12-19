import React from "react";
import ExampleRecipe from "./Recipe";
import ExampleCombination from "./Combination";

const ExampleRecpComb = () => {
  return (
    <div className="container">
      <div className="ExampleRecpComb">
        <div className="ExampleRecipe">
          <h2>Explore More ...</h2>
          <ExampleRecipe />
          <ExampleCombination />
        </div>
      </div>
    </div>
  );
};

export default ExampleRecpComb;
