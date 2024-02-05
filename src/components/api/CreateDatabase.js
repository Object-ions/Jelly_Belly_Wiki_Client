import React from 'react';

const CreateDatabase = () => {
  return (
    <div className="doc">
      <h3>
        Create the Database <p>(work locally)</p>
      </h3>

      <ul>
        <li>
          6. In your terminal, under the project's production directory{' '}
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
              $ dotnet ef migrations add Initial
              <br />$ dotnet ef database update
            </code>
          </pre>
        </li>
      </ul>

      <h3>Launching the API</h3>
      <p>
        7. In the command line in the project's production directory{' '}
        <code>JellyBellyWikiApi.Solution</code>, enter the command{' '}
        <code>dotnet watch run</code>. This will compile and execute the
        application. and will open 'Swagger' on localhost:5001
      </p>
      <pre>
        <code>$ dotnet watch run</code>
      </pre>
      <p>
        * At this point the API database is ready to use. if you would like to
        access 'Swagger' and it did not open automatically, use this link in
        your browser:
      </p>
      <pre>
        <code>https://localhost:5001/swagger/index.html</code>
      </pre>

      <h3>Using API</h3>
      <p>
        To access the API endpoints and see the data you can utilize tools like
        a browser, Postman, or Swagger.
      </p>
      <p>
        To see how to integrate this API in your application check out "How to
        Utilize This API".
      </p>
    </div>
  );
};

export default CreateDatabase;
