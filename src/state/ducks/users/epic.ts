import { ofType } from "redux-observable";
import { REQUEST_USERS, User } from "./types";
import { map, mergeMap } from "rxjs/operators";
import { db } from "../../../config/firebase";
import { from, Observable } from "rxjs";
import { RequestSuccessAction, requestUsersSuccess } from "./actions";
import { Action } from "redux";
import firebase from "firebase";

const firebaseUserMapper = (
  input: firebase.firestore.QueryDocumentSnapshot
): User => {
  return {
    firstname: input.get("firstname"),
    lastname: input.get("lastname"),
    email: input.get("email")
  };
};

export default (
  action$: Observable<Action>
): Observable<RequestSuccessAction> =>
  action$.pipe(
    ofType(REQUEST_USERS),
    mergeMap(() =>
      from(db.collection("users").get()).pipe(
        map(response => {
          return requestUsersSuccess(response.docs.map(firebaseUserMapper));
        })
      )
    )
  );
