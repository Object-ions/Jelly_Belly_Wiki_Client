import * as actionType from "../actions/ActionTypes";

const beansReducer = (state, action) => {
  switch (action.type) {
    case actionType.GET_BEANS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        beans: action.beans,
      };
    case actionType.GET_BEANS_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error,
      };
    case actionType.GET_SINGLE_BEAN_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        singleBean: action.singleBean,
      };
    case actionType.GET_SINGLE_BEAN_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error,
      };
    case actionType.GET_FACTS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        facts: action.facts,
      };
    case actionType.GET_FACTS_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error,
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default beansReducer;
