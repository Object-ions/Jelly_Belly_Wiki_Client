import React, { useEffect, useReducer } from "react";
import beansReducer from "./../reducers/beans-reducer";
import { getBeansFailure, getBeansSuccess } from "./../actions/index";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const InformativeSection = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    fetch(`https://localhost:5001/api/Beans/16`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        } else {
          const waitResponse = await res.json();
          console.log(waitResponse);
          return waitResponse;
        }
      })
      .then((jsonifiedResponse) => {
        const action = getBeansSuccess([jsonifiedResponse]);
        dispatch(action);
      })
      .catch((error) => {
        const action = getBeansFailure(error.message);
        dispatch(action);
      });
  }, []);

  const { error, isLoaded, beans } = state;

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    const bean = beans[0];
    return (
      <div className="InformativeSection">
        <div className="item-wrapper">
          <h3>{bean.flavorName}</h3>
          <img src={bean.imageUrl} alt={bean.flavorName}></img>
        </div>

        <div className="item-wrapper">
          <h3>Explore 100+ beans</h3>
          {/* arrow */}
        </div>
      </div>
    );
  }
};

export default InformativeSection;
