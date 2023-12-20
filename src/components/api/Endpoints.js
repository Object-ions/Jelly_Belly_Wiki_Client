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
            <th>Endpoint</th>
            <th>Request Type</th>
            <th>Path</th>
            <th>Description</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Get Beans</td>
            <td>GET</td>
            <td>/api/beans</td>
            <td>Retrieves a paginated list of beans.</td>
            <td>
              - groupName (string, optional): Filters by group name.
              <br />
              - flavorName (string, optional): Filters by flavor name.
              <br />
              - colorGroup (string, optional): Filters by color group.
              <br />
              - glutenFree (boolean, optional): Filters by gluten-free status.
              <br />
              - sugarFree (boolean, optional): Filters by sugar-free status.
              <br />
              - seasonal (boolean, optional): Filters by seasonal availability.
              <br />
              - kosher (boolean, optional): Filters by kosher status.
              <br />
              - pageIndex (int, default=1): Page index for pagination.
              <br />- pageSize (int, default=10): Records per page for
              pagination.
            </td>
          </tr>
          <tr>
            <td>2. Get Bean by ID</td>
            <td>GET</td>
            <td>/api/beans/id</td>
            <td>Retrieves detailed information about a specific bean.</td>
            <td>- id (int): The unique identifier of the bean.</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default endpoints;
