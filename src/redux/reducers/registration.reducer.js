import {
  REGITER_USER_REQUEST,
  REGITER_USER_SUCCESSFUL,
  REGITER_USER_FAILURE
} from "./../actions/Registration/registration.types";

const initialState = {
  registerError: false,
  registerSuccess: false,
  registerLoading: false,
  registerData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGITER_USER_REQUEST:
      return {
        registerError: false,
        registerSuccess: false,
        registerLoading: true,
        registerData: {},
      };
    case REGITER_USER_SUCCESSFUL:
      return {
        registerError: false,
        registerSuccess: true,
        registerLoading: false,
        registerData: action.payload,
      };
    case REGITER_USER_FAILURE:
      return {
        registerError: true,
        registerSuccess: false,
        registerLoading: false,
        registerData:  action.payload,
      };
    default:
      return state;
  }
}
