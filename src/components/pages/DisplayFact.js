import React from "react";
import { getDataFailure, getBeansSuccess } from "../../actions/index";
import ErrorComponent from "../ErrorComponent";
import happyBean from "../../img/happy-bean.png";
import Loading from "../LoadingComponent";
import useFetch from "../../hooks/useFetch";

const initialState = {
  isLoaded: false,
  beans: [],
  error: null,
};

const DisplayFact = () => {
  const { error, isLoaded, beans } = useFetch(
    "https://localhost:5001/api/Facts?pageIndex=1&pageSize=150",
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
