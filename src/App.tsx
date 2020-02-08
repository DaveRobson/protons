import React from 'react';
import {FirestoreCollection, FirestoreProvider} from "@react-firebase/firestore";
import { config } from "./config/firebase";
import firebase from "firebase";

const App = () => {
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <h1>Firebase test</h1>
      <FirestoreCollection path="/users/" limit={1}>
        {d => {
          return d.isLoading ? "Loading" : <pre>{JSON.stringify(d.value)}</pre>;
        }}
      </FirestoreCollection>

    </FirestoreProvider>
  );
};

export default App;
