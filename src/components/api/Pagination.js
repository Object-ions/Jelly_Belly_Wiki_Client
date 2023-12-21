import React from "react";

const Pagination = () => {
  return (
    <div className="doc">
      <h3>Pagination Info</h3>
      <p>
        The API supports pagination for listing endpoints. Pagination allows you
        to retrieve a subset of records, making it efficient for large datasets.
      </p>
      <ul>
        <li>
          <code>pageIndex</code>: Indicates the current page number. Starts at
          1.
        </li>
        <li>
          <code>pageSize</code>: Defines the number of records per page.
        </li>
      </ul>
      <p>
        Example: To retrieve the second page of beans with 10 beans per page,
        use:
      </p>
      <pre>
        <code>GET /api/beans?pageIndex=1&amp;pageSize=10</code>
      </pre>
      <p>
        If pagination is not defined in the request, default values will be
        used.
      </p>
    </div>
  );
};

export default Pagination;
