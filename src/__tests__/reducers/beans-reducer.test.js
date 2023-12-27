import beansReducer from "../../reducers/beans-reducer";
import * as actionType from "./../../actions/ActionTypes";

describe("beansReducer", () => {
  let action;

  const initialState = {
    isLoaded: false,
    beans: [],
    error: null,
  };

  test("should successfully throw a new error if a non-matching action type is passed into it", () => {
    expect(() => {
      beansReducer(initialState, { type: null });
    }).toThrowError("There is no action matching null.");
  });

  test("should change isLoaded to true and update beans", () => {
    const beans = "An article";
    action = {
      type: actionType.GET_DATA_SUCCESS,
      beans,
    };

    expect(beansReducer(initialState, action)).toEqual({
      isLoaded: true,
      beans: "An article",
      error: null,
    });
  });

  test("should change isLoaded to true and update beans and add an error message", () => {
    const error = "An error";
    action = {
      type: actionType.GET_BEANS_FAILURE,
      error,
    };

    expect(beansReducer(initialState, action)).toEqual({
      isLoaded: true,
      beans: [],
      error: "An error",
    });
  });
});
