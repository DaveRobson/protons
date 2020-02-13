import {applyMiddleware, createStore} from "redux"
import {combineEpics, createEpicMiddleware} from "redux-observable"
import {epics, reducers} from "./ducks"

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
  );

  epicMiddleware.run(rootEpic);

  return store;
}