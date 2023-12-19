import React, { useEffect, useReducer } from "react";
import beansReducer from "../reducers/beans-reducer";
import { getSingleBeanFailure, getSingleBeanSuccess } from "../actions/index";
import { Link, NavLink, useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import LoadingComponent from "./LoadingComponent";
import cherryTurnover from "./../img/Cherry-Turnovers.jpeg";

const initialState = {
  isLoaded: false,
  singleBean: {},
  error: null,
};

const ExampleCombination = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    fetch(`https://localhost:5001/api/Combinations/1`)
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
    return <LoadingComponent />;
  } else {
    return (
      <div className="recipe-card">
        <Link to={"/combinations"}>Click here for more combinations</Link>
        <br />
        <br />
        <h3>{singleBean.name}</h3>
        <p>{singleBean.tag}</p>
        <img src={cherryTurnover} alt={singleBean.name} />
      </div>
    );
  }
};

export default ExampleCombination;
