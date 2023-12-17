import React, { useEffect, useReducer } from "react";
import beansReducer from "../reducers/beans-reducer";
import { getFactsFailure, getFactsSuccess } from "../actions/index";
import cherryImg from "./../img/cherry-red.png";
import "flowbite";
import beanImg from "./../img/bean-filled-color.png";

const initialState = {
  isLoaded: false,
  facts: [],
  error: null,
};

const DisplayFact = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    const factIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    Promise.all(
      factIds.map((id) =>
        fetch(`https://localhost:5001/api/Facts/${id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`${res.status}: ${res.statusText}`);
            }
            return res.json();
          })
          .catch((error) => {
            dispatch(getFactsFailure(error.message));
          })
      )
    )
      .then((facts) => {
        console.log("Fetched facts:", facts);
        dispatch(getFactsSuccess(facts.filter((fact) => fact)));
      })
      .catch((error) => {
        dispatch(getFactsFailure(error.message));
      });
  }, []);

  const { error, isLoaded, facts } = state;

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="container">
        <div className="Display-facts">
          <div className="fact-side">
            <div>
              <img src={cherryImg} id="cherryImg-fact" />
              <h2>Did You Know?</h2>
              <p>
                Very Cherry has been the most popular Jelly Belly flavor for
                many years, only briefly surpassed by Buttered Popcorn in 1998.
              </p>
            </div>
            <div>
              <img src={beanImg} id="beanImg-fact" />
              <h2>Did You Know?</h2>
              <p>
                Very Cherry has been the most popular Jelly Belly flavor for
                many years, only briefly surpassed by Buttered Popcorn in 1998.
              </p>
            </div>
          </div>
          <div>
            {facts.map((fact, index) => (
              <div key={index} className="item-wrapper">
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default DisplayFact;
