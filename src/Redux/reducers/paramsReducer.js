import { SET_COUNTRY } from "../actions/countryAction";
import { SET_NAME } from "../actions/nameAction";
import { SET_PAGE_SIZE } from "../actions/pageSizeAction";
import { SET_TAG } from "../actions/tagAction";
import { SET_PAGE } from "../actions/pageAction";
import { SET_SORT } from "../actions/sortAction";

const initialState = {
  name: "",
  country: "pl",
  pageSize: 10,
  page: 1,
  tag: "",
  sort: "",
};

export const paramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_TAG:
      return {
        ...state,
        tag: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};
