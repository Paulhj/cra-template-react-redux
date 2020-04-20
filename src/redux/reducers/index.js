import { combineReducers } from "redux";
import items from "./itemReducer";
import users from "./userReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  items,
  users,
  apiCallsInProgress
});

export default rootReducer;
