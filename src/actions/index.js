import * as actionType from "./ActionTypes";

export const getBeansSuccess = (data) => ({
  type: actionType.GET_BEANS_SUCCESS,
  beans: data.items,
});

export const getBeansFailure = (error) => ({
  type: actionType.GET_BEANS_FAILURE,
  error,
});

export const getSingleBeanSuccess = (singleBean) => ({
  type: actionType.GET_SINGLE_BEAN_SUCCESS,
  singleBean,
});

export const getSingleBeanFailure = (error) => ({
  type: actionType.GET_SINGLE_BEAN_FAILURE,
  error,
});

export const getFactsSuccess = (data) => ({
  type: actionType.GET_FACTS_SUCCESS,
  facts: data.items,
});

export const getFactsFailure = (error) => ({
  type: actionType.GET_FACTS_FAILURE,
  error,
});
