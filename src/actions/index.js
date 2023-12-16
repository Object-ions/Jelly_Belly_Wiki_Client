import * as actionType from "./ActionTypes";

export const getBeansSuccess = (beans) => ({
  type: actionType.GET_BEANS_SUCCESS,
  beans,
});

export const getBeansFailure = (error) => ({
  type: actionType.GET_BEANS_FAILURE,
  error,
});

export const getFactsSuccess = (facts) => ({
  type: actionType.GET_FACTS_SUCCESS,
  facts,
});

export const getFactsFailure = (error) => ({
  type: actionType.GET_FACTS_FAILURE,
  error,
});
