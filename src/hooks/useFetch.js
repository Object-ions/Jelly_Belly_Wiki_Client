import React, { useEffect, useReducer } from "react";
import beansReducer from "../reducers/beans-reducer";

const useFetch = (url, initialState, successFunc, failureFunc) => {
  const [state, dispatch] = useReducer(beansReducer, initialState);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        // throw new Error(`${res.status}: ${res.statusText}`);
        const action = failureFunc(`${res.status}: ${res.statusText}`);
        dispatch(action);
      } else {
        const data = await res.json();
        const action = successFunc(data);
        dispatch(action);
      }
    } catch (err) {
      const action = failureFunc(err.message);
      dispatch(action);
    }
  };

  return state;
};

export default useFetch;
