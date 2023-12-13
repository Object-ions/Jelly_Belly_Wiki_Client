import beansReducer from "../../reducers/beans-reducer";

describe("beansReducer", () => {
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
});
