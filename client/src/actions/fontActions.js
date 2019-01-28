import axios from "axios";

import {
  ADD_FONT,
  GET_FONTS,
  GET_ERRORS
} from "./types";

export const addFont = fontData => dispatch => {
  axios
    .post("/api/fonts", fontData)
    .then(res =>
      dispatch({
        type: ADD_FONT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getFonts = () => dispatch => {
  axios
    .get("/api/fonts")
    .then(res =>
      dispatch({
        type: GET_FONTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FONTS,
        payload: null
      })
    );
};