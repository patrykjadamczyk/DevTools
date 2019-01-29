import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import fontReducer from "./fontReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  font: fontReducer
});
