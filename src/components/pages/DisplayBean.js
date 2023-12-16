import React, { useEffect, useReducer } from "react";
import beansReducer from "../../reducers/beans-reducer";
import { getBeansFailure, getBeansSuccess } from "../../actions/index";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayBean = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    fetch(`https://localhost:5001/api/Beans?pageIndex=1&pageSize=150`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        } else {
          const waitResponse = await res.json();
          console.log(waitResponse);
          // return res.json();
          return waitResponse;
        }
      })
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        const action = getBeansSuccess(jsonifiedResponse.items);
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
    return (
      <div className="DisplayBean">
        <div className="container">
          <h3>a Little Bit of Bean ...</h3>
          <div className="bean-grid">
            {/*  Dynamic */}
            {beans.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div>
                  <h4>{item.flavorName}</h4>
                  <p>{item.description}</p>
                </div>
                <img src={item.imageUrl} alt={item.flavorName} />
              </div>
            ))}
            {/* END Dynamic */}
          </div>
        </div>
      </div>
    );
  }
};

export default DisplayBean;
