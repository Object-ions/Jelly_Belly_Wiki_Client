import React, { useState } from "react";
import EndpointsBeans from "./EndpointsBeans";
import EndpointsRecipes from "./EndpointsRecipes";
import EndpointsCombinations from "./EndpointsCombinations";
import EndpointsFacts from "./EndpointsFacts";
import EndpointsMilestones from "./EndpointsMilestones";

const Endpoints = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState("Beans");

  const handleSelectEndpoint = (endpoint) => {
    setSelectedEndpoint(endpoint);
  };

  return (
    <>
      <h2>Endpoints</h2>
      <ol>
        <h3>List of Endpoints:</h3>
        <li onClick={() => handleSelectEndpoint("Beans")}>
          <a>Beans</a>
        </li>
        <li onClick={() => handleSelectEndpoint("Facts")}>
          <a>Facts</a>
        </li>
        <li onClick={() => handleSelectEndpoint("Recipes")}>
          <a>Recipes</a>
        </li>
        <li onClick={() => handleSelectEndpoint("Combinations")}>
          <a>Combinations</a>
        </li>
        <li onClick={() => handleSelectEndpoint("Milestones")}>
          <a>History</a>
        </li>
      </ol>
      <h3>HTTP Request Structure</h3>
      {selectedEndpoint === "Beans" && <EndpointsBeans />}
      {selectedEndpoint === "Facts" && <EndpointsFacts />}
      {selectedEndpoint === "Recipes" && <EndpointsRecipes />}
      {selectedEndpoint === "Combinations" && <EndpointsCombinations />}
      {selectedEndpoint === "Milestones" && <EndpointsMilestones />}
    </>
  );
};

export default Endpoints;
