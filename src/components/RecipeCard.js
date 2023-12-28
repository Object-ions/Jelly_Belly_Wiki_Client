import "./RecipeCard.css";
import React from "react";
import { getDataFailure, getSingleDataSuccess } from "./../actions/index";
import { Link, useParams } from "react-router-dom";
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

const RecipeCard = () => {
  const { recipeId } = useParams();

  const { error, isLoaded, singleBean } = useFetch(
    `https://localhost:5001/api/Recipes/${recipeId}`,
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
      <div className="RecipeCard">
        <div className="container">
          <div className="recipe-card-wrapper">
            {/* Name */}
            <div className="item-wrapper">
              <h3>{singleBean.name}</h3>
            </div>
            {/* Description */}
            <div className="item-wrapper">
              <p>{singleBean.description}</p>
            </div>
            {/* Timing */}
            <div className="item-wrapper">
              {singleBean.prepTime ? (
                <p>Preparation time: {singleBean.prepTime} </p>
              ) : (
                ""
              )}
              {singleBean.cookTime ? (
                <p>Cook time: {singleBean.cookTime} </p>
              ) : (
                ""
              )}
              {singleBean.totalTime ? (
                <p>Total time: {singleBean.totalTime} </p>
              ) : (
                ""
              )}
              {singleBean.makingAmount ? (
                <p> Recipe makes {singleBean.makingAmount} </p>
              ) : (
                ""
              )}
            </div>
            {/* Image */}
            <div className="img-wrapper">
              <img src={singleBean.imageUrl} alt={singleBean.name} />
            </div>
            {/* Ingredients */}
            <div className="item-wrapper">
              <h4>Ingredients</h4>
              <ul>
                {singleBean.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            {/* Additional */}
            <div className="item-wrapper">
              <h4>{singleBean.additions1[0]}</h4>
              {singleBean.additions1 && (
                <ul>
                  {singleBean.additions1.slice(1).map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              )}
              {singleBean.additions2 && <p>{singleBean.additions2}</p>}
              {singleBean.additions3 && <p>{singleBean.additions3}</p>}
            </div>
            {/* Directions */}
            <div className="item-wrapper">
              <h4>Directions</h4>
              <ul>{singleBean.directions.join(",")}</ul>
            </div>
            {/* Tips */}
            <div className="item-wrapper">
              {singleBean.tips[0] && <p>Tips - {singleBean.tips}</p>}
            </div>
          </div>
        </div>
        <Link to={"/recipes"}>
          Back to recipes
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>
    );
  }
};

export default RecipeCard;
