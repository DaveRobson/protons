import { ofType } from "redux-observable"
import { REQUEST_USERS, User } from "./types"
import { map, mergeMap } from "rxjs/operators"
import { db } from "../../../config/firebase";
import { from, Observable } from "rxjs"
import { requestUsersSuccess } from "./actions"
import { Action } from "redux"
import firebase from "firebase";
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot
import DocumentData = firebase.firestore.DocumentData

const firebaseUserMapper = (input: QueryDocumentSnapshot<DocumentData>): User => {
  return {
    firstname: input.get("firstname"),
    lastname: input.get("lastname"),
    email: input.get("email")
  }
}

export default (action$: Observable<Action>) => action$.pipe(
  ofType(REQUEST_USERS),
  mergeMap(action =>
    from(db.collection("users").get()).pipe(
      map(response => requestUsersSuccess(response.docs.map(firebaseUserMapper)))
    )
  )
);