import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/itemActions";

it("Should handle creating items", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const item = {
    title: "Clean Code"
  };

  // act
  const action = courseActions.createItemSuccess(item);
  store.dispatch(action);

  // assert
  const createdItem = store.getState().items[0];
  expect(createdItem).toEqual(item);
});
