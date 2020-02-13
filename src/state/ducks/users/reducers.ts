import {Action} from "redux"
import {REQUEST_USERS, REQUEST_USERS_SUCCESS, User} from "./types"

interface UserAction extends Action {
  data: User[]
}

export default (state: { data: User[], loading: boolean} = {data: [], loading: false}, action: UserAction) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        data: action.data,
        loading: true
      };
    case REQUEST_USERS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
};