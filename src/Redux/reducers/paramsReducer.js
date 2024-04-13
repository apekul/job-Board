import { SET_LOCATION } from "../actions/locationAction";
import { SET_NAME } from "../actions/nameAction";
import { SET_PAGE_SIZE } from "../actions/pageSizeAction";
import { SET_TAG } from "../actions/tagAction";

const initialState = {
  name: "",
  location: "",
  pageSize: 10,
  tag: "",
  fetchedData: [],
};

export const paramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    case SET_TAG:
      return {
        ...state,
        tag: action.payload,
      };
    default:
      return state;
  }
};
