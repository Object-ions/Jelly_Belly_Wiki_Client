import React from "react";
import { getDataFailure, getBeansSuccess } from "../actions/index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import useFetch from "../hooks/useFetch";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const ExampleBean = () => {
  const { error, isLoaded, beans } = useFetch(
    "https://localhost:5001/api/Beans?colorGroup=brown&pageIndex=1&pageSize=6",
    initialState,
    getBeansSuccess,
    getDataFailure
  );

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <LoadingComponent />;
  } else {
    return (
      <div className="ExampleBean container">
        <div className="info-grid">
          <div className="item-wrapper explore-beans info-top">
            <h2>Explore Beans</h2>
          </div>
          {beans?.map((bean, index) => (
            <div key={index} className="item-wrapper">
              <Link to={"/beans/" + bean.beanId}>
                <h3>{bean.flavorName}</h3>
              </Link>
              <div className="img-wrapper">
                <img src={bean.imageUrl} alt={bean.flavorName} />
              </div>
            </div>
          ))}
          <div className="item-wrapper explore-beans info-bottom">
            <Link to={"/beans/"}>
              Explore More Beans
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ExampleBean;
