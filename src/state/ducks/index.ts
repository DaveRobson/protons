import { usersReducer, usersEpic } from "./users";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const reducers = combineReducers({
  users: usersReducer
});

export const epics = combineEpics(usersEpic);
