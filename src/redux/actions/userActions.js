// File holds all of the item action creators
import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

//Thunks are defined below.  Used for async calls to the api.
export function loadUsers() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getUsers()
      .then(items => {
        dispatch(loadUsersSuccess(items));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
