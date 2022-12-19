import { combineReducers } from "redux";
import login from "./login.reducer";
import registration from "./registration.reducer";
import users from "./users.reducer"

export default combineReducers({
  login,
  registration,
  users
});
