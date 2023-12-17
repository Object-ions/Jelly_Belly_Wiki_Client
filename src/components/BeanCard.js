import React, { useEffect, useReducer } from "react";
import beansReducer from "./../reducers/beans-reducer";
import { getSingleBeanFailure, getSingleBeanSuccess } from "./../actions/index";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";

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
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="container">
        <div className="Bean-card">
          <div className="bean-card-item">
            <p>Group Name:</p>
            <p>{singleBean.groupName.join(",")}</p>
          </div>
          <div className="bean-card-item">
            <h3>Flavor Name:</h3>
            <h3>{singleBean.flavorName}</h3>
          </div>
          <div className="bean-card-item">
            <p>Description:</p>
            <p>{singleBean.description}</p>
            <div className="img-wrapper">
              <img src={singleBean.imageUrl} />
            </div>
          </div>
          <div className="bean-card-item">
            <p>Ingredients:</p>
            <p>{singleBean.ingredients.join(",")}</p>
          </div>
          <div className="bean-card-item">
            <p>Color Group:</p>
            <p>"{singleBean.colorGroup}"</p>
          </div>
          <div className="bean-card-item">
            <p>Hexadecimal Color:</p>
            <div id="bean-bg-color">{singleBean.backgroundColor}</div>
          </div>
          <div className="bean-card-item">
            <p>Bean ID:</p>
            <p>{singleBean.beanId}</p>
          </div>
          <div className="bean-card-item">
            <p>Kosher: </p>
            <p>{singleBean.kosher ? "yes" : "no"}</p>
          </div>
          <div className="bean-card-item">
            {" "}
            <p>Seasonal:</p>
            <p>{singleBean.seasonal ? "yes" : "no"}</p>
          </div>
          <div className="bean-card-item">
            <p>Gluten Free: </p>
            <p>{singleBean.glutenFree ? "yes" : "no"}</p>
          </div>
          <div className="bean-card-item">
            {" "}
            <p>Sugar Free: </p>
            <p>{singleBean.sugarFree ? "yes" : "no"}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default BeanCard;
