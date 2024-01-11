import React, { useEffect, useReducer } from "react";
import beansReducer from "../reducers/beans-reducer";
import { getDataFailure, getSingleDataSuccess } from "../actions/index";
import { Link } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import LoadingComponent from "./LoadingComponent";
import cherryTurnover from "./../img/Cherry-Turnovers.png";
import miniCherry from "./../img//mini-cherry.png";
import miniCoconut from "./../img/mini-coconut.png";
import miniPopcorn from "./../img/mini-popcorn.png";
import useFetch from "../hooks/useFetch";

const initialState = {
  isLoaded: false,
  singleBean: {},
  error: null,
};

const ExampleCombination = () => {
  const { error, isLoaded, singleBean } = useFetch(
    "https://jellybellywikiapi.onrender.com/api/Combinations/1",
    initialState,
    getSingleDataSuccess,
    getDataFailure
  );

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <LoadingComponent />;
  } else {
    return (
      <div className="recipe-card">
        <div>
          <Link to={"/combinations"}>
            Click here for more combinations
            <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
        <br />
        <br />
        <h3>{singleBean.name}</h3>
        <p>{singleBean.tag.join(",")}</p>
        <div className="inline">
          <img className="mini-bean" src={miniCherry} alt="mini" />
          <p>+</p>
          <img className="mini-bean" src={miniCherry} alt="mini" />
          <p>+</p>
          <img className="mini-bean" src={miniCoconut} alt="mini" />
          <p>+</p>
          <img className="mini-bean" src={miniPopcorn} alt="mini" />
          <p>=</p>
        </div>
        <img src={cherryTurnover} alt={singleBean.name} />
      </div>
    );
  }
};

export default ExampleCombination;
