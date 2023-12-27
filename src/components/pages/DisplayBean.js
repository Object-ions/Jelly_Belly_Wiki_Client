import React from "react";
import { getDataFailure, getBeansSuccess } from "../../actions/index";
import { Link } from "react-router-dom";
import ErrorComponent from "../ErrorComponent";
import Loading from "../LoadingComponent";
import useFetch from "../../hooks/useFetch";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayBean = () => {
  const { error, isLoaded, beans } = useFetch(
    "https://localhost:5001/api/Beans?pageIndex=1&pageSize=150",
    initialState,
    getBeansSuccess,
    getDataFailure
  );

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="DisplayBean">
        <div className="container">
          <h3>Explore All Beans ...</h3>
          <div className="bean-grid">
            {beans.map((item) => (
              <div className="item-wrapper" key={item.beanId}>
                <Link to={"/beans/" + item.beanId}>
                  <h4>{item.flavorName}</h4>
                </Link>
                <img src={item.imageUrl} alt={item.flavorName} />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default DisplayBean;
