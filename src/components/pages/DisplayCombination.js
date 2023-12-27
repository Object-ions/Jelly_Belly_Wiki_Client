import React from "react";
import { getDataFailure, getDataSuccess } from "../../actions/index";
import ErrorComponent from "../ErrorComponent";
import happyBean from "../../img/happy-bean.png";
import Loading from "../LoadingComponent";
import useFetch from "../../hooks/useFetch";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayCombination = () => {
  const { error, isLoaded, beans } = useFetch(
    "https://localhost:5001/api/Combinations?pageIndex=1&pageSize=60",
    initialState,
    getDataSuccess,
    getDataFailure
  );

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="DisplayRecipe">
        <div className="container">
          <h3>Explore Recipes ...</h3>
          <div className="recipe-grid">
            <img src={happyBean} alt="happy-bean" className="happy-bean" />
            {beans.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.tag[0].replaceAll(",", "")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
export default DisplayCombination;
