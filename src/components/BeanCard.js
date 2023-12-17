import React, { useEffect, useReducer } from "react";
import beansReducer from "./../reducers/beans-reducer";
import { getSingleBeanFailure, getSingleBeanSuccess } from "./../actions/index";
import { useParams } from "react-router-dom";

const initialState = {
  isLoaded: false,
  singleBean: {},
  error: null,
};

const BeanCard = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);
  const { beanId } = useParams();

  useEffect(() => {
    fetch(`https://localhost:5001/api/Beans/${beanId}`)
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
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="container">
        <div>
          <p>Mock text</p>
          <div>
            <div className="">
              <p>Group Name: {singleBean.groupName.join(",")}</p>
              <h3>Flavor Name: {singleBean.flavorName}</h3>
              <img src={singleBean.imgUrl} />
              <p>Description: {singleBean.description}</p>
              <p>colorGroup: {singleBean.colorGroup}</p>
              <p>Ingredients: {singleBean.ingredients.join(",")}</p>
              <p>Color Group: {singleBean.colorGroup}</p>
              <p>Hexadecimal Color: {singleBean.backgroundColor}</p>
              <p>Bean ID: {singleBean.beanId}</p>
              <p>Kosher: </p>
              <p>Seasonal: </p>
              <p>Gluten Free: </p>
              <p>Sugar Free: </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BeanCard;
