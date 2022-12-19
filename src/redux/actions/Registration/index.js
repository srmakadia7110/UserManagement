// This is where you will have api calls
import axios from "axios";
import Cookies from "js-cookie";
import history from "../../../history";
import { 
  REGITER_USER_REQUEST,
  REGITER_USER_SUCCESSFUL,
  REGITER_USER_FAILURE
 } from "./registration.types";

const regiterUser = (data) => async (dispatch) => {
  dispatch({
    type: REGITER_USER_REQUEST,
  });
  let url = `${process.env.REACT_APP_API_URL}registration`;
  try {
    const res = await axios.post(url, data);
    if(res.data.code == 200){
      dispatch({
        type: REGITER_USER_SUCCESSFUL,
        payload: res.data,
      });
      history.push("/");
    }else{
      dispatch({
        type: REGITER_USER_FAILURE,
        payload: res.data,
      });

    }
  } catch (err) {
    dispatch({
      type: REGITER_USER_FAILURE,
      payload: err,
    });
  }
};

export default regiterUser;
