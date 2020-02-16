import * as types from "./types";
import { User } from "./types";
import { Action } from "redux";

export interface RequestSuccessAction extends Action {
  data: User[];
}

interface ErrorAction extends Action {
  message: string;
}

const requestUsers = (): Action => ({
  type: types.REQUEST_USERS
});

const requestUsersPending = (): Action => ({
  type: types.REQUEST_USERS_PENDING
});

const requestUsersSuccess = (data: User[]): RequestSuccessAction => ({
  type: types.REQUEST_USERS_SUCCESS,
  data
});

const requestUsersFailure = (message: string): ErrorAction => ({
  type: types.REQUEST_USERS_FAILURE,
  message
});

export {
  requestUsers,
  requestUsersSuccess,
  requestUsersPending,
  requestUsersFailure
};
