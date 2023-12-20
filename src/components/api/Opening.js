import React from "react";
import Description from "./Description";
import Features from "./Features";
import TechUsed from "./TechUsed";

const Opening = () => {
  return (
    <div>
      <h1>Jelly Belly Wiki API</h1>
      <hr />
      <p>By Moses Atia Poston</p>
      <Description />
      <Features />
      <TechUsed />
    </div>
  );
};

export default Opening;
