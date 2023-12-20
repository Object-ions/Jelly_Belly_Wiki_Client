import React from "react";

const Setup = () => {
  const connectionStringTemplate = `{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;database=[YOUR-DATABASE-NAME-HERE];uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];"
  }
}`;

  return (
    <>
      <h2>Setup/Installation Requirements</h2>

      <h3>Required Technology</h3>

      <ol>
        <li>
          Follow the instructions on this{" "}
          <a href="https://old.learnhowtoprogram.com/c-and-net/getting-started-with-c/installing-and-configuring-mysql">
            page
          </a>{" "}
          for installing and configuring MySQL.
        </li>
        <li>
          Installing dotnet-ef:
          <pre>
            <code>
              $ dotnet tool install --global dotnet-ef --version 6.0.0
            </code>
          </pre>
        </li>
        <li>
          Install Postman
          <br />
          (Optional){" "}
          <a href="https://www.postman.com/downloads/">
            Download and install Postman
          </a>
          .
        </li>
      </ol>

      <h4>Cloning the Repo:</h4>

      <ol>
        <li>Open Terminal.</li>
        <li>
          Change your directory to where you would want the cloned directory.
        </li>
        <li>
          Input the following command into your terminal:
          <pre>
            <code>
              $ git clone https://github.com/Object-ions/Jelly-Belly-Wiki-API
            </code>
          </pre>
        </li>
      </ol>

      <h4>Set up a Connection String to Database</h4>

      <ol start="4">
        <li>
          Using the terminal, navigate to the production directory-{" "}
          <code>JellyBellyWikiApi.Solution</code> and create a new file called{" "}
          <code>appsettings.json</code>
        </li>
        <li>
          Add the following code snippet while also replacing the following
          values with your own values as shown below the code snippet:
          <ul>
            <li>
              Replace <code>[YOUR-USERNAME-HERE]</code> with your username
            </li>
            <li>
              Replace <code>[YOUR-PASSWORD-HERE]</code> with your password
            </li>
            <li>
              Replace <code>[YOUR-DATABASE-NAME-HERE]</code> with the name of
              your database
            </li>
          </ul>
          <pre>
            <code className="language-json">{connectionStringTemplate}</code>
          </pre>
        </li>
      </ol>
    </>
  );
};

export default Setup;
