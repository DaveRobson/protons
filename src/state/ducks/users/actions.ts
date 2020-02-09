import * as types from "./types";
import { User } from "./types"


const requestUsers = () => ({
  type: types.REQUEST_USERS
})

const requestUsersPending = () => ({
  type: types.REQUEST_USERS_PENDING
})

const requestUsersSuccess = (data: User[]) => ({
  type: types.REQUEST_USERS_SUCCESS,
  data
})

const requestUsersFailure = (message: string) => ({
  type: types.REQUEST_USERS_FAILURE,
  message
})

export {
  requestUsers,
  requestUsersSuccess,
  requestUsersPending,
  requestUsersFailure
}