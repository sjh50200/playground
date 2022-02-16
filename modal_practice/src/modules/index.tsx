import React from "react";
import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  modalReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
