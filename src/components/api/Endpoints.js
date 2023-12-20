import React from "react";

const endpoints = () => {
  return (
    <>
      <h2>Endpoints</h2>

      <h3>HTTP Request Structure</h3>

      <h4>"Beans"</h4>
      <table>
        <thead>
          <tr>
            <th>Request Type</th>
            <th>Path</th>
            <th>Description</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>/api/{"{beans}"}</td>
            <td>Retrieves a list of beans.</td>
            <td>
              groupName, flavorName, colorGroup, backgroundColor, imageUrl,
              ingredients, glutenFree, sugarFree, seasonal, kosher, pageIndex,
              pageSize (all optional)
            </td>
          </tr>
          <tr>
            <td>GET</td>
            <td>
              /api/{"{beans}"}/{"{id}"}
            </td>
            <td>Retrieves a specific bean by its ID.</td>
            <td>None</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default endpoints;
