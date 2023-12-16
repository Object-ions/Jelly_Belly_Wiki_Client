import React, { useEffect, useReducer } from "react";
import beansReducer from "./../reducers/beans-reducer";
import { getSingleBeanFailure, getSingleBeanSuccess } from "./../actions/index";

const initialState = {
  isLoaded: false,
  singleBean: [],
  error: null,
};

const BeanCard = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    const singleBeanIds = [1];

    Promise.all(
      singleBeanIds.map((id) =>
        fetch(`https://localhost:5001/api/Beans/${id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`${res.status}: ${res.statusText}`);
            }
            return res.json();
          })
          .catch((error) => {
            dispatch(getSingleBeanFailure(error.message));
          })
      )
    )
      .then((singleBean) => {
        console.log("Fetched singleBean:", singleBean);
        dispatch(
          getSingleBeanSuccess(singleBean.filter((singleBean) => singleBean))
        );
      })
      .catch((error) => {
        dispatch(getSingleBeanFailure(error.message));
      });
  }, []);

  const { error, isLoaded, singleBean } = state;

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
            {singleBean.map((singleBean, index) => (
              <div key={index} className="">
                <p>Group Name: {singleBean.groupName[1]}</p>
                <h3>Flavor Name: {singleBean.flavorName}</h3>
                <img src={singleBean.imgUrl} />
                <p>Description: {singleBean.description}</p>
                <p>colorGroup: {singleBean.colorGroup}</p>
                <p>Ingredients:: {singleBean.ingredients[0]}</p>
                <p>Color Group: {singleBean.colorGroup}</p>
                <p>Hexadecimal Color: {singleBean.backgroundColor}</p>
                <p>Bean ID: {singleBean.beanId}</p>
                <p>Kosher: </p>
                <p>Seasonal: </p>
                <p>Gluten Free: </p>
                <p>Sugar Free: </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default BeanCard;
