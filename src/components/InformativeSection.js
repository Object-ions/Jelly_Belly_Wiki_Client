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
    const beanIds = [92, 21, 43, 40, 65, 80];

    Promise.all(
      beanIds.map((id) =>
        fetch(`https://localhost:5001/api/Beans/${id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`${res.status}: ${res.statusText}`);
            }
            return res.json();
          })
          .catch((error) => {
            dispatch(getBeansFailure(error.message));
          })
      )
    )
      .then((beans) => {
        dispatch(getBeansSuccess(beans.filter((bean) => bean)));
      })
      .catch((error) => {
        dispatch(getBeansFailure(error.message));
      });
  }, []);

  const { error, isLoaded, beans } = state;

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="InformativeSection container">
        <div className="info-grid">
          <div className="item-wrapper explore-beans info-top">
            <h2>Explore Beans</h2>
          </div>
          {beans.map((bean, index) => (
            <div key={index} className="item-wrapper">
              <h3>{bean.flavorName}</h3>
              <div className="img-wrapper">
                <img src={bean.imageUrl} alt={bean.flavorName} />
              </div>
            </div>
          ))}
          <div className="item-wrapper explore-beans info-bottom">
            <h3>
              <a href="">Explore More Beans...</a>
            </h3>
            {/* arrow */}
          </div>
        </div>
      </div>
    );
  }
};

export default InformativeSection;
