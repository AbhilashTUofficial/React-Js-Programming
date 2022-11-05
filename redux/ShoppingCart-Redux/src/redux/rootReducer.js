//! Connect to store, so the user can manipulate the data

import { combineReducers } from "redux";
import shopReducer from "./Shopping/shopping-reducer";
// Combine all the reducers in the app.
// auth reducer, db reducer, etc
const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
