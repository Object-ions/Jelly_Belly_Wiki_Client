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
      <div className="container">
        <div className="Bean-card">
          <div className="bean-card-wrapper centered">
            <h3>{singleBean.name}</h3>
            <p>{singleBean.description}</p>
            {singleBean.prepTime ? <p> {singleBean.prepTime} </p> : ""}
            {singleBean.cookTime ? <p> {singleBean.cookTime} </p> : ""}
            {singleBean.totalTime ? <p> {singleBean.totalTime} </p> : ""}
            {singleBean.makingAmount ? (
              <p> Recipe makes {singleBean.makingAmount} </p>
            ) : (
              ""
            )}
            <div>
              <h4>Ingredients</h4>
              <p>{singleBean.ingredients}</p>
            </div>
            {singleBean.additional1 ? <p>{singleBean.additional1}</p> : ""}
            {singleBean.additional2 ? <p>{singleBean.additional1}</p> : ""}
            {singleBean.additional3 ? <p>{singleBean.additional1}</p> : ""}
            <div>
              <h4>Directions</h4>
              <p>{singleBean.directions}</p>
            </div>
            <div>
              <h4>Tips</h4>
              <p>{singleBean.tips}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RecipeCard;
