import React, { useState } from "react";

const DataSample = () => {
  const [selectedResponse, setSelectedResponse] = useState("flavorName");

  const handleSelectResponse = (response) => {
    setSelectedResponse(response);
  };

  return (
    <div className="doc">
      <h2>Request URL</h2>
      <br />
      <p>Click on an option to see the requested URL with the response body:</p>
      <ul>
        <li onClick={() => handleSelectResponse("flavorName")}>
          <a>response for query on Beans by flavorName</a>
        </li>
        <li onClick={() => handleSelectResponse("flavorId")}>
          <a>response for query on Beans by id</a>
        </li>
        <li onClick={() => handleSelectResponse("pagination")}>
          <a>response for query on Beans by paging</a>
        </li>
      </ul>

      {selectedResponse === "flavorName" && (
        <div className="flavorName">
          <p>The following query will return beans with the name "7UP".</p>
          <pre>
            <code>https://localhost:5001/api/Beans?flavorName=7up</code>
          </pre>
          <h2>Server Response</h2>
          <h3>Code:</h3>
          <pre>
            <code>200</code>
          </pre>

          <h3>Response Body:</h3>
          <pre>
            <code>
              {`
                {
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
        "ingredients": [
          "Sugar",
          "Corn Syrup",
          "Modified Food Starch",
          "Contains 2% Or Less Of The Following:",
          "Citric Acid",
          "Sodium Lactate",
          "Natural & Artificial Flavor",
          "Color Added",
          "Yellow 5",
          "Blue 1",
          "Beeswax",
          "Carnauba Wax",
          "Confectioner'S Glaze"
        ],
        "flavorName": "7Up",
        "description": "The Refreshing And Crisp Flavor Of Lemon Lime Soda.",
        "colorGroup": "khaki",
        "backgroundColor": "#CEDC91",
        "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/ab692677-5471-4863-91a8-659363ae4cc4",
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

      {selectedResponse === "flavorId" && (
        <div className="flavorId">
          <p>The following query will return beans with id of 24.</p>
          <pre>
            <code>https://localhost:5001/api/Beans/24</code>
          </pre>
          <h2>Server Response</h2>
          <h3>Code:</h3>
          <pre>
            <code>200</code>
          </pre>

          <h3>Response Body:</h3>
          <pre>
            <code>
              {`
{
  "beanId": 24,
  "groupName": [
    "Jelly Belly Official Flavors"
  ],
    "ingredients": [
    "Sugar",
    "Corn Syrup",
    "Modified Food Starch",
    "Contains 2% Or Less Of The Following:",
    "Vanilla Beans",
    "Natural And Artificial Flavors",
    "Color Added",
    "Beeswax",
    "Carnauba Wax",
    "Confectioner'S Glaze."
  ],
  "flavorName": "French Vanilla",
  "description": "A Jelly Bean That Tastes Just Like A Vanilla Bean.",
  "colorGroup": "lightgray",
  "backgroundColor": "#D2D0CE",
  "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/3e8e01cb-f2a8-4121-ab59-b0a608ad5a92",
  "glutenFree": false,
  "sugarFree": false,
  "seasonal": false,
  "kosher": true
}
              `}
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
          <pre>
            <code>https://localhost:5001/api/Beans?pageIndex=1&pageSize=2</code>
          </pre>

          <h2>Server Response</h2>
          <h3>Code:</h3>
          <pre>
            <code>200</code>
          </pre>

          <h3>Response Body:</h3>
          <pre>
            <code>
              {`
{
  "totalCount": 114,
  "pageSize": 2,
  "currentPage": 1,
  "totalPages": 57,
  "items": [
    {
      "beanId": 1,
      "groupName": [
        "Jelly Belly Official Flavors",
        "Soda Pop Shoppe® Flavors"
      ],
      "ingredients": [
        "Sugar",
        "Corn Syrup",
        "Modified Food Starch",
        "Contains 2% Or Less Of The Following:",
        "Citric Acid",
        "Sodium Lactate",
        "Natural & Artificial Flavor",
        "Color Added",
        "Yellow 5",
        "Blue 1",
        "Beeswax",
        "Carnauba Wax",
        "Confectioner'S Glaze"
      ],
      "flavorName": "7Up",
      "description": "The Refreshing And Crisp Flavor Of Lemon Lime Soda.",
      "colorGroup": "khaki",
      "backgroundColor": "#CEDC91",
      "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/ab692677-5471-4863-91a8-659363ae4cc4",
      "glutenFree": false,
      "sugarFree": false,
      "seasonal": false,
      "kosher": true
    },
    {
      "beanId": 2,
      "groupName": [
        "Jelly Belly Official Flavors",
        "Soda Pop Shoppe® Flavors"
      ],
      "ingredients": [
        "Sugar",
        "Corn Syrup",
        "Modified Food Starch",
        "Contains 2% Or Less Of The Following:",
        "Natural And Artificial Flavors",
        "Color Added",
        "Beeswax",
        "Carnauba Wax",
        "Confectioner'S Glaze."
      ],
      "flavorName": "A&W® Cream Soda",
      "description": "A Deliciously Creamy Take On The Classic Vanilla Flavor.",
      "colorGroup": "gainsboro",
      "backgroundColor": "#E1DFE1",
      "imageUrl": "https://cdn-tp1.mozu.com/9046-m1/cms/files/75fea694-ed38-4e84-a86e-182e31ea5a7b",
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
      <br />
      <p>To see all query options check the label "Query"</p>
    </div>
  );
};

export default DataSample;
