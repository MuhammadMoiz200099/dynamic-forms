import { combineReducers } from "@reduxjs/toolkit";

import fileReducer from "../slices/file.slice";

const rootReducer = combineReducers({
  file: fileReducer,
});

export default rootReducer;