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

            <div className="item-wrapper">
              <div>
                <h4>{beans.flavorName}</h4>
                <p>{beans.description}</p>
              </div>
              <img src={beans.imageUrl} />
            </div>
            {/* END Dynamic */}
          </div>
        </div>
      </div>
    );
  }
};

export default InformativeSection;

// return (
//   <div className="InformativeSection">
//     <div className="item-wrapper">
//       <h3>Name Of Bean</h3>
//       <img src=""></img>
//     </div>

//     <div className="item-wrapper">
//       <h3>Explore 100+ beans</h3>
//       {/* arrow */}
//     </div>
//   </div>
// );
