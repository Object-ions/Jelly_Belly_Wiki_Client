import React, { useEffect, useReducer } from "react";
import beansReducer from "../../reducers/beans-reducer";
import { getBeansFailure, getBeansSuccess } from "../../actions/index";
import ErrorComponent from "../ErrorComponent";
import happyBean from "../../img/happy-bean.png";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayFact = () => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    fetch(`https://localhost:5001/api/Facts?pageIndex=1&pageSize=150`)
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
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="DisplayFact">
        <div className="container">
          <h3>Explore All Facts ...</h3>
          <div className="fact-grid">
            <img src={happyBean} alt="happy-bean" className="happy-bean" />
            {/*  Dynamic */}
            {beans.map((item) => (
              <div className="item-wrapper" key={item.factId}>
                <h4>
                  {item.factId}. {item.title}
                </h4>
                <p>{item.description}</p>
              </div>
            ))}
            {/* END Dynamic */}
          </div>
        </div>
      </div>
    );
  }
};

export default DisplayFact;
