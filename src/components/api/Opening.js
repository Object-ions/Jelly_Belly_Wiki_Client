import React from "react";
import Description from "./Description";
import Features from "./Features";
import TechUsed from "./TechUsed";
import KnownBugs from "./KnownBugs";
import License from "./License";

const Opening = () => {
  return (
    <div className="doc">
      <h1>Jelly Belly Wiki API</h1>
      <hr />
      <p>
        By{" "}
        <a href="https://github.com/Object-ions" target="blank">
          Moses Atia Poston
        </a>
      </p>
      <Description />
      <Features />
      <TechUsed />
      <KnownBugs />
      <License />
    </div>
  );
};

export default Opening;
