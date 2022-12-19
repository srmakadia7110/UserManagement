import {
  FATCH_USER_LIST_REQUEST,
  FATCH_USER_LIST_SUCCESSFUL,
  FATCH_USER_LIST_FAILURE
} from "./../actions/Users/users.types";

const initialState = {
  userListError: false,
  userListSuccess: false,
  userListLoading: false,
  userListData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FATCH_USER_LIST_REQUEST:
      return {
        userListError: false,
        userListSuccess: false,
        userListLoading: true,
        userListData: {},
      };
    case FATCH_USER_LIST_SUCCESSFUL:
      return {
        userListError: false,
        userListSuccess: true,
        userListLoading: false,
        userListData: action.payload,
      };
    case FATCH_USER_LIST_FAILURE:
      return {
        userListError: true,
        userListSuccess: false,
        userListLoading: false,
        userListData:  action.payload,
      };
    default:
      return state;
  }
}
