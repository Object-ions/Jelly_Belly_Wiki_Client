import React from "react";
import Recipe from "../Recipe";

const Examples = () => {
  return (
    <>
      <section>
        <h2>General Steps for Utilizing the API</h2>
        <h3>API Endpoint and Request:</h3>
        <p>
          Identify the correct API endpoint to fetch the desired data. For
          fetching a specific recipe, the endpoint is{" "}
          <code>https://localhost:5001/api/Recipes/{"{id}"}</code>, where{" "}
          <code>{"{id}"}</code> is the dynamic part that can be replaced with
          the desired recipe's ID.
        </p>
        <p>
          Example: To fetch a recipe with ID 24, use{" "}
          <code>https://localhost:5001/api/Recipes/24</code>.
        </p>

        <h3>Making the Request:</h3>
        <p>
          Use an HTTP client or library relevant to your technology stack to
          make a GET request to the API endpoint. Handle potential errors such
          as network issues, server errors, or endpoint not found. This is
          crucial for robust applications.
        </p>

        <h3>Handling the Response:</h3>
        <p>
          Upon receiving a successful response (usually indicated by status code
          200), parse the response body, which is typically in JSON format.
          Extract the necessary information from the response for use in your
          application.
        </p>

        <h2>Example Usage Based on the Provided Code</h2>
        <h3>1. Fetching Data:</h3>
        <pre>
          <code>
            {`fetch('https://localhost:5001/api/Recipes/24')
  .then(res => {
    if (!res.ok) {
      throw new Error(\`\${res.status}: \${res.statusText}\`);
    }
    return res.json();
  })
  .then(singleBean => {
    // Process the data (singleBean) here
  })
  .catch(error => {
    // Handle errors here
  });`}
          </code>
        </pre>

        <h3>2. Utilizing the Fetched Data:</h3>
        <p>
          After fetching the data, you can utilize it in various ways depending
          on your application's requirements. Based on your{" "}
          <code>ExampleRecipe</code> component, here's how the data is used:
        </p>
        <ul>
          <li>
            Display Recipe Name: The <code>singleBean.name</code> property is
            used to display the name of the recipe.
          </li>
          <li>
            Show Making Amount: <code>singleBean.makingAmount</code> indicates
            how much the recipe yields.
          </li>
          <li>
            Recipe Description: <code>singleBean.description</code> provides
            details about the recipe.
          </li>
          <li>
            Display Image: The image URL <code>singleBean.imageUrl</code> is
            used to display a picture of the recipe.
          </li>
          <li>
            Navigation Link: <code>singleBean.recipeId</code> is used to create
            a link to a more detailed recipe page.
          </li>
        </ul>
      </section>

      <h3>
        This JSX code is taken from a component within the Jelly Belly Wiki UI,
        and it serves as an example illustrating how to utilize the API.
      </h3>

      <section>
        <pre>
          <code>
            {`<div className="recipe-card">
        <div>
          <Link to={"/recipes"}>
            Click here for more recipes
            <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
        <br />
        <br />
        <h3>{singleBean.name}</h3>
        <p>Recipe for {singleBean.makingAmount}</p>
        <p>{singleBean.description}</p>
        <img src={singleBean.imageUrl} alt={singleBean.name} />
        <div>
          <Link to={"/recipes/" + singleBean.recipeId}>
            Check out {singleBean.name} Recipe
            <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Example of Utilizing API Response in ExampleRecipe</h2>
        <div>
          <h3>Display Recipe Name:</h3>
          <p>
            Example: <code>{"<h3>{singleBean.name}</h3>"}</code>
          </p>
        </div>
        <div>
          <h3>Display Recipe Amount:</h3>
          <p>
            Example:{" "}
            <code>{"<p>Recipe for {singleBean.makingAmount}</p>"}</code>
          </p>
        </div>
        <div>
          <h3>Display Recipe Description:</h3>
          <p>
            Example: <code>{"<p>{singleBean.description}</p>"}</code>
          </p>
        </div>
        <div>
          <h3>Display Recipe Image:</h3>
          <p>
            Example:{" "}
            <code>
              {"<img src={singleBean.imageUrl} alt={singleBean.name} />"}
            </code>
          </p>
        </div>
        <div>
          <h3>Navigation Link to Detailed Recipe:</h3>
          <p>
            Example:{" "}
            <code>
              {
                "<Link to={`/recipes/${singleBean.recipeId}`}>Check out {singleBean.name} Recipe <FontAwesomeIcon icon={faArrowRightLong} /></Link>"
              }
            </code>
          </p>
        </div>
      </section>
      <section>
        <p>
          This represents the rendering of the component containing the code
          mentioned above, excluding the CSS.
        </p>
        <h2>Recipe.JSX</h2>
        <Recipe />
      </section>
    </>
  );
};

export default Examples;
