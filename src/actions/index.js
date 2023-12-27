import * as actionType from "./ActionTypes";

export const getBeansSuccess = (data) => ({
  type: actionType.GET_BEANS_SUCCESS,
  beans: data.items,
});

export const getSingleBeanSuccess = (singleBean) => ({
  type: actionType.GET_SINGLE_BEAN_SUCCESS,
  singleBean,
});

export const getFactsSuccess = (data) => ({
  type: actionType.GET_FACTS_SUCCESS,
  facts: data.items,
});

export const getDataFailure = (error) => ({
  type: actionType.GET_DATA_FAILURE,
  error,
});
