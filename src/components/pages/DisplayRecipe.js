import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getDataFailure, getBeansSuccess } from "../../actions/index";
import ErrorComponent from "../ErrorComponent";
import happyBean from "../../img/happy-bean.png";
import { Link } from "react-router-dom";
import Loading from "../LoadingComponent";
import useFetch from "../../hooks/useFetch";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayRecipe = () => {
  const { error, isLoaded, beans } = useFetch(
    "https://localhost:5001/api/Recipes?pageIndex=1&pageSize=50",
    initialState,
    getBeansSuccess,
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
                  <p>{item.description}</p>
                  <br />
                  {item.makingAmount ? <p>Make: {item.makingAmount}</p> : ""}
                  {item.totalTime ? <p>Total Time: {item.totalTime}</p> : ""}
                </div>
                <Link to={"/recipes/" + item.recipeId}>
                  check out this recipe
                  <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
export default DisplayRecipe;
