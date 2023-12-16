import React, { useEffect, useReducer } from "react";
import beansReducer from "../../reducers/beans-reducer";
import { getBeansFailure, getBeansSuccess } from "../../actions/index";

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
            dispatch(getBeansFailure(error.message));
          })
      )
    )
      .then((facts) => {
        dispatch(getBeansSuccess(facts.filter((fact) => fact)));
      })
      .catch((error) => {
        dispatch(getBeansFailure(error.message));
      });
  }, []);

  const { error, isLoaded, facts } = state;

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div>
          <div>
            <h2>Explore Facts</h2>
          </div>
          {facts.map((fact, index) => (
            <div key={index} className="item-wrapper">
              <h3>{fact.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default DisplayFact;
