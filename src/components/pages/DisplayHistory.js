import "./DisplayHistory.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getDataFailure, getDataSuccess } from "../../actions/index";
import ErrorComponent from "../ErrorComponent";
import happyBean from "../../img/happy-bean.png";
import Loading from "../LoadingComponent";
import useFetch from "../../hooks/useFetch";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayHistory = () => {
  const { error, isLoaded, beans } = useFetch(
    "https://jellybellywikiapi.onrender.com/api/MileStones?pageIndex=1&pageSize=50",
    initialState,
    getDataSuccess,
    getDataFailure
  );

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="DisplayHistory">
        <div className="container">
          <h3>Explore History ...</h3>
          <div className="history-grid">
            {beans?.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div>
                  <h4>{item.year}</h4>
                  <p>{item.description}</p>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
              </div>
            ))}
            <img src={happyBean} alt="happy-bean" className="happy-bean" />
          </div>
        </div>
      </div>
    );
  }
};
export default DisplayHistory;
