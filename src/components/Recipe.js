import React from "react";
import { getDataFailure, getSingleDataSuccess } from "../actions/index";
import { Link } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import LoadingComponent from "./LoadingComponent";
import useFetch from "../hooks/useFetch";

const initialState = {
  isLoaded: false,
  singleBean: {},
  error: null,
};

const Recipe = () => {
  const { error, isLoaded, singleBean } = useFetch(
    "https://localhost:5001/api/Recipes/24",
    initialState,
    getSingleDataSuccess,
    getDataFailure
  );

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <LoadingComponent />;
  } else {
    return (
      <div className="recipe-card">
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
      </div>
    );
  }
};

export default Recipe;
