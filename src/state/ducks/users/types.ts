const REQUEST_USERS = "REQUEST_USERS";
const REQUEST_USERS_PENDING = "REQUEST_USERS_PENDING";
const REQUEST_USERS_SUCCESS = "REQUEST_USERS_SUCCESS";
const REQUEST_USERS_FAILURE = "REQUEST_USERS_FAILURE";

export interface User {
  firstname: string;
  lastname: string;
  email: string;
}

export {
  REQUEST_USERS,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILURE
};
