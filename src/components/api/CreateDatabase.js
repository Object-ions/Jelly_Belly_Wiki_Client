import React from "react";

const CreateDatabase = () => {
  return (
    <div className="doc">
      <h3>Create the Database</h3>
      <ul>
        <li>
          In your terminal, under the project's production directory{" "}
          <code>JellyBellyWikiApi.Solution</code>, run this command to create
          the database.
          <pre>
            <code>$ dotnet ef database update</code>
          </pre>
        </li>
        <li>
          However, if update does not work, run this command in your terminal:
          <pre>
            <code>
              $ dotnet ef migrations add Initial $ dotnet ef database update
            </code>
          </pre>
        </li>
      </ul>

      <h3>Launching the API</h3>
      <p>
        In the command line in the project's production directory{" "}
        <code>JellyBellyWikiApi.Solution</code>, enter the command{" "}
        <code>dotnet watch run</code>. This will compile and execute the
        application.
      </p>
      <pre>
        <code>$ dotnet watch run</code>
      </pre>

      <h3>Using API</h3>
      <p>
        To access the API endpoints and see the data you can utilize tools like
        a browser, Postman, or Swagger.
      </p>
      <p>
        (If working with Swagger, go to either{" "}
        <a href="https://localhost:5001/swagger/index.html">
          https://localhost:5001/swagger/index.html
        </a>{" "}
        or{" "}
        <a href="http://localhost:5000/swagger/index.html">
          http://localhost:5000/swagger/index.html
        </a>
        .)
      </p>
      <p>At This point you can make api calls </p>
      <p>
        To see how to integrate this API in your application check out "End
        Points" and "Data Samples".
      </p>
    </div>
  );
};

export default CreateDatabase;
