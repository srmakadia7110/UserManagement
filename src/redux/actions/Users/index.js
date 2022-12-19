// This is where you will have api calls
import axios from "axios";
import Cookies from "js-cookie";
import history from "../../../history";
import { 
  FATCH_USER_LIST_REQUEST,
  FATCH_USER_LIST_SUCCESSFUL,
  FATCH_USER_LIST_FAILURE
 } from "./users.types";

const getUserList = (page,size,search_string) => async (dispatch) => {
  dispatch({
    type: FATCH_USER_LIST_REQUEST,
  });
  let url = `${process.env.REACT_APP_API_URL}users?page=${page}&size=${size}&search_string=${search_string}`;
  try {
    const res = await axios.get(url);
    if(res.data.code == 200){
      dispatch({
        type: FATCH_USER_LIST_SUCCESSFUL,
        payload: res.data.result,
      });
      history.push("/users");
    }else{
      dispatch({
        type: FATCH_USER_LIST_FAILURE,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: FATCH_USER_LIST_FAILURE,
      payload: err,
    });
  }
};

export default getUserList;
