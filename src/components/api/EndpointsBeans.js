import React from "react";
import ColorGroupTable from "./ColorGroupTable";

const EndpointsBeans = () => {
  return (
    <>
      <h4>"Beans"</h4>
      <table className="endpoint-table">
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
              groupName, flavorName, colorGroup, glutenFree, sugarFree,
              seasonal, kosher, pageIndex, pageSize
            </td>
          </tr>
          <tr>
            <td>2. Get Bean by ID</td>
            <td>GET</td>
            <td>/api/beans/id</td>
            <td>Retrieves detailed information about a specific bean.</td>
            <td>id</td>
          </tr>
        </tbody>
      </table>

      <h4>Parameter Details</h4>
      <ul>
        <li>
          <strong>groupName</strong> (string, optional): Filters beans by group
          name.
        </li>
        <li>
          <strong>flavorName</strong> (string, optional): Filters beans by
          flavor name.
        </li>
        <li>
          <strong>colorGroup</strong> (string, optional): Filters beans by color
          group. To see list of color groups continue to the table below.
        </li>
        <li>
          <strong>glutenFree</strong> (boolean, optional): Filters beans by
          gluten-free status.
        </li>
        <li>
          <strong>sugarFree</strong> (boolean, optional): Filters beans by
          sugar-free status.
        </li>
        <li>
          <strong>seasonal</strong> (boolean, optional): Filters beans by
          seasonal availability.
        </li>
        <li>
          <strong>kosher</strong> (boolean, optional): Filters beans by kosher
          status.
        </li>
        <li>
          <strong>pageIndex</strong> (int, default=1): Specifies the page index
          for pagination.
        </li>
        <li>
          <strong>pageSize</strong> (int, default=10): Specifies the number of
          records per page for pagination.
        </li>
      </ul>

      <h4 className="additional-info-header">Additional Information</h4>
      <ul className="additional-info-list">
        <li>
          <strong>Response Format</strong>: JSON
        </li>
        <li>
          <strong>Authentication</strong>: No authentication required for these
          endpoints.
        </li>
        <li>
          <strong>Rate Limit</strong>: Not specified (consider providing details
          if applicable).
        </li>
        <li>
          <strong>Error Codes</strong>: Standard HTTP status codes (e.g., 404
          for Not Found).
        </li>
      </ul>

      <h4 className="example-request-header">Example Request</h4>
      <ul className="example-request-list">
        <li>
          To retrieve information about the bean with ID 1:
          <pre>
            <code>https://localhost:5001/api/Beans/1</code>
          </pre>
        </li>
      </ul>
      <ColorGroupTable />
    </>
  );
};

export default EndpointsBeans;
