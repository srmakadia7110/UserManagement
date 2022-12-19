import {
  AUTH_REQUEST,
  AUTH_SUCCESSFUL,
  AUTH_FAILURE,
} from "./../actions/Login/login.types";

const initialState = {
  loginError: false,
  loginSuccess: false,
  loginLoading: false,
  loginData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        loginError: false,
        loginSuccess: false,
        loginLoading: true,
        loginData: {},
      };
    case AUTH_SUCCESSFUL:
      return {
        loginError: false,
        loginSuccess: true,
        loginLoading: false,
        loginData: action.payload,
      };
    case AUTH_FAILURE:
      return {
        loginError: true,
        loginSuccess: false,
        loginLoading: false,
        loginData: action.payload,
      };
    default:
      return state;
  }
}
