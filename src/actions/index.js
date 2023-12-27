import * as actionType from "./ActionTypes";

export const getDataSuccess = (data) => ({
  type: actionType.GET_DATA_SUCCESS,
  beans: data.items,
});

export const getSingleBeanSuccess = (singleBean) => ({
  type: actionType.GET_SINGLE_BEAN_SUCCESS,
  singleBean,
});

export const getDataFailure = (error) => ({
  type: actionType.GET_DATA_FAILURE,
  error,
});
