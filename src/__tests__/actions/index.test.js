import * as actions from "./../../actions";
import * as actionType from "./../../actions/ActionTypes";

describe("beans reducer actions", () => {
  it("getDataSuccess should create GET_DATA_SUCCESS action", () => {
    const beans = "An article";
    expect(actions.getDataSuccess(beans)).toEqual({
      type: actionType.GET_DATA_SUCCESS,
      beans,
    });
  });

  it("getDataFailure should create GET_BEANS_FAILURE action", () => {
    const error = "An error";
    expect(actions.getDataFailure(error)).toEqual({
      type: actionType.GET_BEANS_FAILURE,
      error,
    });
  });
});
