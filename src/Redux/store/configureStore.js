import { configureStore } from "@reduxjs/toolkit";
import { paramsReducer } from "../reducers/paramsReducer";

export const store = configureStore({
  reducer: {
    params: paramsReducer,
  },
});
