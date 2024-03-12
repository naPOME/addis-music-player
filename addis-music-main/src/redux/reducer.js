// reducers.js
import { combineReducers } from "@reduxjs/toolkit";
import songDataReducer from "./songDataSlice";

const rootReducer = combineReducers({
  songData: songDataReducer,
});

export default rootReducer;
