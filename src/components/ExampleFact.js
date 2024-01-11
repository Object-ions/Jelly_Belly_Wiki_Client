import "./ExampleFact.css";
import React from "react";
import { getDataFailure, getDataSuccess } from "../actions/index";
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
  beans: [],
  error: null,
};

const ExampleFact = () => {
  const { error, isLoaded, beans } = useFetch(
    "https://jellybellywikiapi.onrender.com/api/Facts?pageIndex=1&pageSize=9",
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
      <div className="container">
        <div className="Example-facts">
          <h2>Did You Know?</h2>
          <div className="fact-side">
            <div>
              <img src={cherryImg} id="cherryImg-fact" alt="cherry" />
              <h2>Did You Know?</h2>
              <p>
                The company has evolved from its original eight flavors in 1976
                to more than 100 over the years. Current popular flavors include
                Buttered Popcorn, Very Cherry, Cotton Candy, Watermelon, and
                Green Apple.
              </p>
            </div>
            <div>
              <img src={beanImg} id="beanImg-fact" alt="beans" />
              <h2>Did You Know?</h2>
              <p>
                Jelly Belly have collaborated with brands like Dr. Pepper, A&W
                Root Beer, Snapple, Tabasco, Krispy Kreme, and Coldstone
                Creamery.
              </p>
            </div>
          </div>
          <div>
            {beans.map((bean, index) => (
              <div key={index} className="item-wrapper">
                <h3>{bean.title}</h3>
                <p>{bean.description}</p>
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
