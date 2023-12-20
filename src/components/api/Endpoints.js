import React from "react";
import EndpointsBeans from "./EndpointsBeans";
import EndpointsRecipes from "./EndpointsRecipes";
import EndpointsCombinations from "./EndpointsCombinations";
import EndpointsFacts from "./EndpointsFacts";
import EndpointsMilestones from "./EndpointsMilestones";

const endpoints = () => {
  return (
    <>
      <h2>Endpoints</h2>
      <ol>
        <h3>List of Endpoints:</h3>
        <li>"Beans"</li>
        <li>"Facts"</li>
        <li>"Recipes"</li>
        <li>"Combinations"</li>
        <li>"History"</li>
      </ol>
      <h3>HTTP Request Structure</h3>
      <EndpointsBeans />
      {/* <EndpointsFacts /> */}
      {/* <EndpointsRecipes /> */}
      {/* <EndpointsCombinations /> */}
      {/* <EndpointsMilestones /> */}
    </>
  );
};

export default endpoints;
