import React, { useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import beansReducer from "../reducers/beans-reducer";
import { getBeansFailure, getBeansSuccess } from "../actions/index";
import { Link } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

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
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <LoadingComponent />;
  } else {
    return (
      <div className="DisplayHistory">
        <div className="container">
          <h3>a Little Bit of History ...</h3>
          <div className="history-grid">
            {beans.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div>
                  <h4>{item.year}</h4>
                  <p>{item.description}</p>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
              </div>
            ))}
          </div>
        </div>
        <Link to="/history">
          Explore More History
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>
    );
  }
};
export default DisplayHistory;
