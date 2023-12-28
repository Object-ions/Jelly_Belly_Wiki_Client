import React from "react";

const Query = () => {
  return (
    <div className="doc">
      <h2>API Endpoints with Query Options and Examples</h2>
      <br />
      <p>
        To find Parameter Details and obtain a comprehensive list of attributes
        such as: 'groupName', 'flavorName', 'colorGroup', and more, please
        follow these steps:
      </p>

      <p>Navigate to the documentation page titled "Endpoints."</p>

      <p>Look for links or references to tables within the documentation.</p>

      <p>
        In these tables, you should be able to locate the desired information,
        including groupName, flavorName, colorGroup, and any other relevant
        details about parameters.
      </p>

      <h4>Beans</h4>
      <p>Base URL: https://localhost:5001/api/beans</p>
      <ul>
        <li>
          groupName:{" "}
          <a href="https://localhost:5001/api/beans?groupName=Jelly%20Belly%20Official%20Flavors">
            https://localhost:5001/api/beans?groupName=Jelly%20Belly%20Official%20Flavors
          </a>
        </li>
        <li>
          flavorName:{" "}
          <a href="https://localhost:5001/api/beans?flavorName=7Up">
            https://localhost:5001/api/beans?flavorName=7Up
          </a>
        </li>
        <li>
          colorGroup:{" "}
          <a href="https://localhost:5001/api/beans?colorGroup=khaki">
            https://localhost:5001/api/beans?colorGroup=khaki
          </a>
        </li>
        <li>
          glutenFree:{" "}
          <a href="https://localhost:5001/api/beans?glutenFree=true">
            https://localhost:5001/api/beans?glutenFree=true
          </a>
        </li>
        <li>
          sugarFree:{" "}
          <a href="https://localhost:5001/api/beans?sugarFree=false">
            https://localhost:5001/api/beans?sugarFree=false
          </a>
        </li>
        <li>
          seasonal:{" "}
          <a href="https://localhost:5001/api/beans?seasonal=true">
            https://localhost:5001/api/beans?seasonal=true
          </a>
        </li>
        <li>
          kosher:{" "}
          <a href="https://localhost:5001/api/beans?kosher=true">
            https://localhost:5001/api/beans?kosher=true
          </a>
        </li>
        <li>
          pageIndex and pageSize:{" "}
          <a href="https://localhost:5001/api/beans?pageIndex=1&pageSize=10">
            https://localhost:5001/api/beans?pageIndex=1&pageSize=10
          </a>
        </li>
      </ul>

      <h4>Facts</h4>
      <p>Base URL: https://localhost:5001/api/facts</p>
      <ul>
        <li>
          title:{" "}
          <a href="https://localhost:5001/api/facts?title=Popularity%20of%20Flavors">
            https://localhost:5001/api/facts?title=Popularity%20of%20Flavors
          </a>
        </li>
      </ul>

      <h4>Combinations</h4>
      <p>Base URL: https://localhost:5001/api/combinations</p>
      <ul>
        <li>
          name:{" "}
          <a href="https://localhost:5001/api/combinations?name=Cherry%20Turnover">
            https://localhost:5001/api/combinations?name=Cherry%20Turnover
          </a>
        </li>
      </ul>

      <h4>Recipes</h4>
      <p>Base URL: https://localhost:5001/api/recipes</p>
      <ul>
        <li>
          name:{" "}
          <a href="https://localhost:5001/api/recipes?name=OMBRÉ%20CAKE">
            https://localhost:5001/api/recipes?name=OMBRÉ%20CAKE
          </a>
        </li>
      </ul>

      <h4>Milestones</h4>
      <p>Base URL: https://localhost:5001/api/mileStones</p>
      <ul>
        <li>
          year:{" "}
          <a href="https://localhost:5001/api/mileStones?year=1869">
            https://localhost:5001/api/mileStones?year=1869
          </a>
        </li>
      </ul>
      <p>
        * Note: When searching with phrases that include spaces, the URL will
        automatically replace spaces with "%20". You can search with spaces
        between words.
      </p>
    </div>
  );
};

export default Query;
