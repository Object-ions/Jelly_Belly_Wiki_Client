import * as actions from "./../../actions";
import * as actionType from "./../../actions/ActionTypes";

describe("beans reducer actions", () => {
  it("getBeansSuccess should create GET_BEANS_SUCCESS action", () => {
    const beans = "An article";
    expect(actions.getBeansSuccess(beans)).toEqual({
      type: actionType.GET_BEANS_SUCCESS,
      beans,
    });
  });

  it("getBeansFailure should create GET_BEANS_FAILURE action", () => {
    const error = "An error";
    expect(actions.getBeansFailure(error)).toEqual({
      type: actionType.GET_BEANS_FAILURE,
      error,
    });
  });
});
