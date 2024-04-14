import { configureStore } from "@reduxjs/toolkit";
import { paramsReducer } from "../reducers/paramsReducer";
import { dataReducer } from "./fetchDataJobs";

export const store = configureStore({
  reducer: {
    params: paramsReducer,
    data: dataReducer,
  },
});
