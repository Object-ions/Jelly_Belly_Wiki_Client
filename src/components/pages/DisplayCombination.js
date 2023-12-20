import React, { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import beansReducer from "../../reducers/beans-reducer";
import { getBeansFailure, getBeansSuccess } from "../../actions/index";
import ErrorComponent from "../ErrorComponent";
import happyBean from "../../img/happy-bean.png";
import { Link } from "react-router-dom";
import Loading from "../LoadingComponent";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayCombination = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    fetch(`https://localhost:5001/api/Combinations?pageIndex=1&pageSize=60
`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        } else {
          const waitResponse = await res.json();
          return waitResponse;
        }
      })
      .then((jsonifiedResponse) => {
        const action = getBeansSuccess(jsonifiedResponse.items);
        dispatch(action);
        console.log(jsonifiedResponse);
      })
      .catch((error) => {
        const action = getBeansFailure(error.message);
        dispatch(action);
      });
  }, []);

  const { error, isLoaded, beans } = state;

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
