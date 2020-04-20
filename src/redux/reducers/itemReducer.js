// File holds item reducer
// Reducers specify how the application's state changes in response to actions sent to the store.
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case types.CREATE_ITEM_SUCCESS:
      return [...state, { ...action.item }];
    case types.UPDATE_ITEM_SUCCESS:
      return state.map(item =>
        item.id === action.item.id ? action.item : item
      );
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;
    case types.DELETE_ITEM_OPTIMISTIC:
      return state.filter(item => item.id !== action.item.id);
    default:
      return state;
  }
}
