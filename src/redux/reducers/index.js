import { combineReducers } from "redux";
import login from "./login.reducer";
import registration from "./registration.reducer";

export default combineReducers({
  login,
  registration,
});
