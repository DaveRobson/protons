import { Action } from "redux"
import { ProtonsState } from "../../index"
import { REQUEST_USERS, REQUEST_USERS_SUCCESS, User } from "./types"

interface UserAction extends Action {
  data: User[]
}

export default (state: User[], action: UserAction) => {
  switch (action.type) {
    case REQUEST_USERS_SUCCESS:
      return [
        ...state,
        action.data
      ];
    default:
      return state;
  }
};