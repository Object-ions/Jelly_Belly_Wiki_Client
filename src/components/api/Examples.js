import React from "react";

const Examples = () => {
  // Example query URLs as strings
  const exampleQueryBeans =
    "https://localhost:5001/api/Beans?pageIndex=2&pageSize=2";
  const exampleQueryFacts =
    "https://localhost:5001/api/Facts?pageIndex=1&pageSize=2";

  // Sample JSON responses as strings
  const sampleJsonBeans = `{
  "totalCount": 114,
  "pageSize": 2,
  "currentPage": 2,
  "totalPages": 57,
  "items": [
    {
      "beanId": 3,
      "groupName": ["Jelly Belly Official Flavors", "Soda Pop Shoppe® Flavors"],
      "groupNameSerialized": "Jelly Belly Official Flavors, Soda Pop Shoppe® Flavors",
      "flavorName": "A&W® Root Beer",
      "description": "Say 'Cheers' With The Flavor Of This All-American Classic Drink.",
      "colorGroup": "saddlebrown",
      "backgroundColor": "#792E27",
      "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/63b9e71d-9866-4044-9af7-7a64a52b0e0e",
      "ingredients": [
        "Sugar, Corn Syrup, Modified Food Starch, Contains 2% Or Less Of The Following: Natural & Artificial Flavors, Color Added, Vegetable & Fruit Juice (Color), Beeswax, Carnauba Wax, Confectioner'S Glaze."
      ],
      "glutenFree": false,
      "sugarFree": false,
      "seasonal": false,
      "kosher": true
    },
    {
      "beanId": 4,
      "groupName": ["Superfruit Flavors"],
      "groupNameSerialized": "Superfruit Flavors",
      "flavorName": "Acai Berry",
      "description": "Hard To Pronounce But A Delight To Enjoy. A Super Sweet And Rich Berry Taste Unlike Any Other.",
      "colorGroup": "darkslategray",
      "backgroundColor": "#5B3640",
      "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/6f0c6164-71c8-47f6-a55f-893f5fd58fa0",
      "ingredients": [
        "Cane Sugar, Tapioca Syrup, Modified Food Starch, Sour Cherry Juice From Concentrate, Blueberry Juice From Blueberry Puree, Pomegranate Juice From Concentrate, Acai Puree, Natural Flavors, Acerola (Barbados) Cherry Juice, Cranberry Puree, Citric Acid, Apple (Color), Confectioner'S Glaze, Beeswax, Grape Concentrate (Color), Carrot (Color), Carnauba Wax, Black Currant (Color), Hibiscus (Color), Color Added."
      ],
      "glutenFree": false,
      "sugarFree": false,
      "seasonal": false,
      "kosher": true
    }
  ]
}`;

  const sampleJsonFacts = `{
  "totalCount": 99,
  "pageSize": 2,
  "currentPage": 1,
  "totalPages": 50,
  "items": [
    {
      "factId": 1,
      "title": "Popularity of Flavors",
      "description": "Very Cherry has been the most popular Jelly Belly flavor for many years, only briefly surpassed by Buttered Popcorn in 1998."
    },
    {
      "factId": 2,
      "title": "Caloric Content",
      "description": "Each bean contains only 4 calories, meaning that a handful of 25 beans amounts to 100 calories."
    }
  ]
}`;

  return (
    <>
      <h2>Examples</h2>

      <h3>Example Queries</h3>
      <p>
        The following query will return beans with ID of 3 to 4 from the dataset
        (page number 2, with 2 beans on each page).
      </p>
      <pre>
        <code>{exampleQueryBeans}</code>
      </pre>

      <h3>Sample JSON Response from the above query</h3>
      <pre>
        <code>{sampleJsonBeans}</code>
      </pre>

      <p>
        The following query will return facts with ID of 1 and 2 from the
        dataset (page number 1, with 2 facts on each page).
      </p>
      <pre>
        <code>{exampleQueryFacts}</code>
      </pre>

      <h3>Sample JSON Response from the above query</h3>
      <pre>
        <code>{sampleJsonFacts}</code>
      </pre>
    </>
  );
};

export default Examples;
