// This is where you will have api calls
import axios from "axios";
import Cookies from "js-cookie";
import history from "../../../history";
import { AUTH_REQUEST, AUTH_SUCCESSFUL, AUTH_FAILURE } from "./login.types";

const getUsers = (data) => async (dispatch) => {
  dispatch({
    type: AUTH_REQUEST,
  });
  let url = `${process.env.REACT_APP_API_URL}login/`;
  try {
    const res = await axios.post(url, data);
    if(res.data.code == 200){
      localStorage.setItem("user", JSON.stringify(res.data.data));
      localStorage.setItem("user-id", res.data.data.ID);
      Cookies.set("user", JSON.stringify(res.data.data));
      Cookies.set("user-id", res.data.data.ID);
      dispatch({
        type: AUTH_SUCCESSFUL,
        payload: res.data,
      });
    }else{
      dispatch({
        type: AUTH_FAILURE,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
      payload: err,
    });
  }
};

export default getUsers;
