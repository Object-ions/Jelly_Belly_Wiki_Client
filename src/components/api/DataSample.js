import React, { useState } from "react";

const DataSample = () => {
  const [selectedResponse, setSelectedResponse] = useState("flavorName");

  const handleSelectResponse = (response) => {
    setSelectedResponse(response);
  };

  return (
    <>
      <h2>Request URL</h2>

      <p>Click on an option to see the requested URL with the response body:</p>
      <ul>
        <li onClick={() => handleSelectResponse("flavorName")}>
          response for query on Beans by flavorName
        </li>
        <li onClick={() => handleSelectResponse("flavorId")}>
          response for query on Beans by id
        </li>
        <li onClick={() => handleSelectResponse("pagination")}>
          response for query on Beans by paging
        </li>
      </ul>

      <p>To see all query options check the label "Query"</p>

      {selectedResponse === "flavorName" && (
        <div className="flavorName">
          <p>The following query will return beans with the name "7UP".</p>
          <p>https://localhost:5001/api/Beans?flavorName=7up</p>

          <h2>Server Response</h2>
          <h3>Code:</h3>
          <pre>
            <code>200</code>
          </pre>

          <h3>Response Body:</h3>
          <pre>
            <code>
              {`{
      "totalCount": 1,
      "pageSize": 10,
      "currentPage": 1,
      "totalPages": 1,
      "items": [
        {
          "beanId": 1,
          "groupName": [
            "Jelly Belly Official Flavors",
            "Soda Pop Shoppe® Flavors"
          ],
          "groupNameSerialized": "Jelly Belly Official Flavors, Soda Pop Shoppe® Flavors",
          "flavorName": "7Up",
          "description": "The Refreshing And Crisp Flavor Of Lemon Lime Soda.",
          "colorGroup": "khaki",
          "backgroundColor": "#CEDC91",
          "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/ab692677-5471-4863-91a8-659363ae4cc4",
          "ingredients": [
            "Sugar, Corn Syrup, Modified Food Starch, Contains 2% Or Less Of The Following: Citric Acid, Sodium Lactate, Natural & Artificial Flavor, Color Added, Yellow 5, Blue 1, Beeswax, Carnauba Wax, Confectioner'S Glaze"
          ],
          "glutenFree": false,
          "sugarFree": false,
          "seasonal": false,
          "kosher": true
        }
      ]
    }`}
            </code>
          </pre>
        </div>
      )}

      {selectedResponse === "flavorId" && (
        <div className="flavorId">
          <p>The following query will return beans with id of 24.</p>
          <p>https://localhost:5001/api/Beans/24</p>

          <h2>Server Response</h2>
          <h3>Code:</h3>
          <pre>
            <code>200</code>
          </pre>

          <h3>Response Body:</h3>
          <pre>
            <code>
              {`{
  "beanId": 24,
  "groupName": [
    "Jelly Belly Official Flavors"
  ],
  "groupNameSerialized": "Jelly Belly Official Flavors",
  "flavorName": "French Vanilla",
  "description": "A Jelly Bean That Tastes Just Like A Vanilla Bean.",
  "colorGroup": "lightgray",
  "backgroundColor": "#D2D0CE",
  "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/3e8e01cb-f2a8-4121-ab59-b0a608ad5a92",
  "ingredients": [
    "Sugar, Corn Syrup, Modified Food Starch, Contains 2% Or Less Of The Following: Vanilla Beans, Natural And Artificial Flavors, Color Added, Beeswax, Carnauba Wax, Confectioner'S Glaze."
  ],
  "glutenFree": false,
  "sugarFree": false,
  "seasonal": false,
  "kosher": true
}`}
            </code>
          </pre>
        </div>
      )}
      {selectedResponse === "pagination" && (
        <div className="pagination">
          <p>
            The following query will return beans with ID of 7 to 8 from the
            dataset- page number 4, with 2 beans on each page.
          </p>
          <p>https://localhost:5001/api/Beans?pageIndex=1&pageSize=2</p>

          <h2>Server Response</h2>
          <h3>Code:</h3>
          <pre>
            <code>200</code>
          </pre>

          <h3>Response Body:</h3>
          <pre>
            <code>
              {`{
  "totalCount": 114,
  "pageSize": 2,
  "currentPage": 4,
  "totalPages": 57,
  "items": [
    {
      "beanId": 7,
      "groupName": [
        "Jelly Belly Official Flavors"
      ],
      "groupNameSerialized": "Jelly Belly Official Flavors",
      "flavorName": "Blueberry",
      "description": "Enjoy The Taste Of Fresh-Picked Blueberries. Deliciously Flavored With Real Blueberry Puree.",
      "colorGroup": "steelblue",
      "backgroundColor": "#3A7195",
      "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/a8f085b5-b4ff-4aca-8650-43ad54c80fe4",
      "ingredients": [
        "Sugar, Corn Syrup, Modified Food Starch, Blueberry Juice From Puree, Contains 2% Or Less Of The Following: Citric Acid, Natural & Artificial Flavor, Color Added, Blue 1 Lake, Beeswax, Carnauba Wax, Confectioner'S Glaze."
      ],
      "glutenFree": false,
      "sugarFree": false,
      "seasonal": false,
      "kosher": true
    },
    {
      "beanId": 8,
      "groupName": [
        "Jelly Belly Official Flavors",
        "Kids Mix Flavors"
      ],
      "groupNameSerialized": "Jelly Belly Official Flavors, Kids Mix Flavors",
      "flavorName": "Bubble Gum",
      "description": "This Bean Has Everything But The Bubble! Taking A Trip Down Memory Lane Has Never Tasted So Good.",
      "colorGroup": "lightpink",
      "backgroundColor": "#E3ACBD",
      "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/51474130-73e9-40b7-a8ba-c9eac7be7de4",
      "ingredients": [
        "Sugar, Corn Syrup, Modified Food Starch, Contains 2% Or Less Of The Following: Artificial Flavor, Color Added, Red 40 Lake, Red 40, Yellow 5 Lake, Beeswax, Carnauba Wax, Confectioner'S Glaze."
      ],
      "glutenFree": false,
      "sugarFree": false,
      "seasonal": false,
      "kosher": true
    }
  ]
}
     `}
            </code>
          </pre>
        </div>
      )}
    </>
  );
};

export default DataSample;
