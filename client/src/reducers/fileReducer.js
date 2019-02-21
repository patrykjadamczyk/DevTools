import isEmpty from "../validation/is-empty";
import { UPLOAD_FILE } from "../actions/types";

const initialState = {
    loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        loading: true
      };
    default:
      return state;
  }
}