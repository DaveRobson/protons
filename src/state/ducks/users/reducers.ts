import { REQUEST_USERS, REQUEST_USERS_SUCCESS, User } from "./types";
import { RequestSuccessAction } from "./actions";

export default (
  state: { data: User[]; loading: boolean } = { data: [], loading: false },
  action: RequestSuccessAction
): { data: User[]; loading: boolean } => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
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
