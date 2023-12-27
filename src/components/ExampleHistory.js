import "../components/pages/DisplayHistory.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getDataFailure, getDataSuccess } from "../actions/index";
import { Link } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import useFetch from "../hooks/useFetch";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayHistory = () => {
  const { error, isLoaded, beans } = useFetch(
    "https://localhost:5001/api/MileStones",
    initialState,
    getDataSuccess,
    getDataFailure
  );

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
