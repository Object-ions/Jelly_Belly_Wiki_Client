import React from "react";

const EndpointsMilestones = () => {
  return (
    <>
      <h4>Milestones</h4>
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
            <td>1. Get Milestones</td>
            <td>GET</td>
            <td>/api/mileStones</td>
            <td>Retrieves a paginated list of milestones.</td>
            <td>year, pageIndex, pageSize</td>
          </tr>
          <tr>
            <td>2. Get Milestone by ID</td>
            <td>GET</td>
            <td>/api/mileStones/id</td>
            <td>Retrieves detailed information about a specific milestone.</td>
            <td>id</td>
          </tr>
        </tbody>
      </table>

      <h4>Parameter Details</h4>
      <ul>
        <li>
          <strong>year</strong> (int, optional): Filters milestones by year.
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
          To retrieve information about the milestone with ID 1:
          <pre>
            <code>https://localhost:5001/api/MileStones/1</code>
          </pre>
        </li>
      </ul>
    </>
  );
};

export default EndpointsMilestones;
