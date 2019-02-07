import UtilHelper from "../../utils/UtilHelper";
import { GET_USER, CREATE_USER, UPDATE_USER } from "./UserActionType";

const defaultState = [];

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case CREATE_USER:
      return state.concat(action.user);
    case UPDATE_USER:
      return UtilHelper.merge(state, action.user);
    default:
      return state;
  }
}

export default UserReducer;
