import { applyMiddleware, CombinedState, createStore, Store } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { epics, reducers } from "./ducks";
import { User } from "./ducks/users/types";
import { RequestSuccessAction } from "./ducks/users/actions";

export interface ProtonsState {
  users: {
    data: User[];
    loading: boolean;
  };
}
const epicMiddleware = createEpicMiddleware();
const defaultState = {
  users: {
    data: [],
    loading: false
  }
};

export default function configureStore(
  initialState: ProtonsState = defaultState
): Store<
  CombinedState<{ users: { data: User[]; loading: boolean } }>,
  RequestSuccessAction
> & { dispatch: unknown } {
  const rootReducer = reducers;

  const rootEpic = combineEpics(epics);

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(rootEpic);

  return store;
}
