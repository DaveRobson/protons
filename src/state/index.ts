import { applyMiddleware, combineReducers, createStore } from "redux"
import { firestoreReducer } from "react-redux-firebase";
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { User } from "./ducks/users/types"
import { reducers, epics } from "./ducks"

export interface ProtonsState {
  [key: string]: any
}
const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialState: ProtonsState = {}) {
  const rootReducer = reducers;

  const rootEpic = combineEpics(
    epics,
  );

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(rootEpic);

  return store;
}