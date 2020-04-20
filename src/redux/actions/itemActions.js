// File holds all of the item action creators
import * as types from "./actionTypes";
import * as itemApi from "../../api/itemApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}

export function updateItemSuccess(item) {
  return { type: types.UPDATE_ITEM_SUCCESS, item };
}

export function createItemSuccess(item) {
  return { type: types.CREATE_ITEM_SUCCESS, item };
}

export function deleteItemOptimistic(item) {
  return { type: types.DELETE_ITEM_OPTIMISTIC, item };
}

//Thunks are defined below.  Used for async calls to the api.
export function loadItems() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return itemApi
      .getItems()
      .then(items => {
        dispatch(loadItemsSuccess(items));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveItem(item) {
  // eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return itemApi
      .saveItem(item)
      .then(savedItem => {
        item.id
          ? dispatch(updateItemSuccess(savedItem))
          : dispatch(createItemSuccess(savedItem));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteItem(item) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteItemOptimistic(item));
    return itemApi.deleteItem(item.id);
  };
}
