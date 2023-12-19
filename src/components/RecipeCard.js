import React, { useEffect, useReducer } from "react";
import beansReducer from "./../reducers/beans-reducer";
import { getSingleBeanFailure, getSingleBeanSuccess } from "./../actions/index";
import { Link, useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  isLoaded: false,
  singleBean: {},
  error: null,
};

const RecipeCard = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);
  const { recipeId } = useParams();

  useEffect(() => {
    fetch(`https://localhost:5001/api/Recipes/${recipeId}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        } else {
          const waitResponse = await res.json();
          return waitResponse;
        }
      })
      .then((singleBean) => {
        const action = getSingleBeanSuccess(singleBean);
        dispatch(action);
        console.log(singleBean);
      })
      .catch((error) => {
        const action = getSingleBeanFailure(error.message);
        dispatch(action);
      });
  }, []);

  const { error, isLoaded, singleBean } = state;

  console.log(singleBean);

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
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
              <p>{singleBean.ingredients}</p>
            </div>
            {/* Additional */}
            <div className="item-wrapper">
              {singleBean.additions1 ? <p>{singleBean.additions1}</p> : ""}
              {singleBean.additions2 ? <br /> : ""}
              {singleBean.additions2 ? <p>{singleBean.additions2}</p> : ""}
              {singleBean.additions3 ? <br /> : ""}
              {singleBean.additions3 ? <p>{singleBean.additions3}</p> : ""}
            </div>
            {/* Directions */}
            <div className="item-wrapper">
              <h4>Directions</h4>
              <p>{singleBean.directions}</p>
            </div>
            {/* Tips */}
            <div className="item-wrapper">
              {singleBean.tips ? <p>Tips - {singleBean.tips}</p> : ""}
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
