import React from "react";

const EndpointsCombinations = () => {
  return (
    <>
      <h4>Combinations</h4>
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
            <td>1. Get Combinations</td>
            <td>GET</td>
            <td>/api/combinations</td>
            <td>Retrieves a paginated list of combinations.</td>
            <td>name, pageIndex, pageSize</td>
          </tr>
          <tr>
            <td>2. Get Combination by ID</td>
            <td>GET</td>
            <td>/api/combinations/id</td>
            <td>
              Retrieves detailed information about a specific combination.
            </td>
            <td>id</td>
          </tr>
        </tbody>
      </table>

      <h4>Parameter Details</h4>
      <ul>
        <li>
          <strong>name</strong> (string, optional): Filters combinations by
          name.
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
          To retrieve information about the combination with ID 1:
          <pre>
            <code>
              https://jellybellywikiapi.onrender.com/api/Combinations/1
            </code>
          </pre>
        </li>
      </ul>
    </>
  );
};

export default EndpointsCombinations;
