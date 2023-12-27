import React from "react";
import { getFactsFailure, getFactsSuccess } from "../actions/index";
import cherryImg from "./../img/cherry-red.png";
import "flowbite";
import beanImg from "./../img/bean-filled-color.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import useFetch from "../hooks/useFetch";

const initialState = {
  isLoaded: false,
  facts: [],
  error: null,
};

const ExampleFact = () => {
  const { error, isLoaded, facts } = useFetch(
    "https://localhost:5001/api/Facts?pageIndex=1&pageSize=9",
    initialState,
    getFactsSuccess,
    getFactsFailure
  );

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <LoadingComponent />;
  } else {
    return (
      <div className="container">
        <div className="Example-facts">
          <h2>Did You Know?</h2>
          <div className="fact-side">
            <div>
              <img src={cherryImg} id="cherryImg-fact" alt="cherry" />
              <h2>Did You Know?</h2>
              <p>
                Very Cherry has been the most popular Jelly Belly flavor for
                many years, only briefly surpassed by Buttered Popcorn in 1998.
              </p>
            </div>
            <div>
              <img src={beanImg} id="beanImg-fact" alt="beans" />
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
            <Link to="/facts">
              Check Out More Facts <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ExampleFact;
