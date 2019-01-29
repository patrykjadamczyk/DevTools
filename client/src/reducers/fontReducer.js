import {
    ADD_FONT,
    GET_FONT,
    GET_FONTS
  } from "../actions/types";
  
  const initialState = {
    fonts: [],
    font: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_FONTS:
        return {
          ...state,
          fonts: action.payload,
          loading: false
        };
      case GET_FONT:
        return {
          ...state,
          font: action.payload,
          loading: false
        };
      case ADD_FONT:
        return {
          ...state,
          fonts: [action.payload, ...state.fonts]
        };
      default:
        return state;
    }
  }