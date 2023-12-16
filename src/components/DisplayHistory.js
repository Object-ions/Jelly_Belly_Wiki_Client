import React, { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import beansReducer from "./../reducers/beans-reducer";
import { getBeansFailure, getBeansSuccess } from "./../actions/index";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayHistory = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    fetch(`https://localhost:5001/api/MileStones`)
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
      })
      .catch((error) => {
        const action = getBeansFailure(error.message);
        dispatch(action);
      });
  }, []);

  const { error, isLoaded, beans } = state;

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="DisplayHistory">
        <div className="container">
          <h3>a Little Bit of History ...</h3>
          <div className="history-grid">
            {/* Static ex */}
            {/* <div className="item-wrapper">
              <div>
                <h4>1869</h4>
                <p>
                  Gustav Goelitz opens a candy business in Belleville, Illinois,
                  laying the foundation for the company's future.
                </p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
            </div> */}
            {/* END Static ex */}

            {/*  Dynamic */}
            {beans.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div>
                  <h4>{item.year}</h4>
                  <p>{item.description}</p>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
              </div>
            ))}
            {/* END Dynamic */}
          </div>
        </div>
      </div>
    );
  }
};
export default DisplayHistory;
