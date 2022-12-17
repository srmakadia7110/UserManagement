// This is where you will have api calls
import axios from "axios";
import Cookies from "js-cookie";
import history from "../../../history";
import { AUTH_REQUEST, AUTH_SUCCESSFUL, AUTH_FAILURE } from "./login.types";

const getUsers = (data) => async (dispatch) => {
  dispatch({
    type: AUTH_REQUEST,
  });
  let url = `${process.env.REACT_APP_API_URL}platform/v1/user/token/`;
  try {
    const res = await axios.post(url, data);
    localStorage.setItem("user", JSON.stringify(res.data.data));
    localStorage.setItem("user-token", res.data.data.token);
    Cookies.set("user", JSON.stringify(res.data.data));
    Cookies.set("user-token", res.data.data.token);
    dispatch({
      type: AUTH_SUCCESSFUL,
      payload: res.data,
    });
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
      payload: err,
    });
  }
};

export default getUsers;
