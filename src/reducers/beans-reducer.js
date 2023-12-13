import * as actionType from "../actions/ActionTypes";

const beansReducer = (state, action) => {
  switch (action.type) {
    case actionType.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        beans: action.beans,
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default beansReducer;
