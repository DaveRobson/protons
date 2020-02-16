import firebase from "firebase";

interface FirebaseConfig {
  authDomain: string;
  apiKey: string;
  databaseURL: string;
  projectId: string;
}

export const config: FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY
    ? process.env.REACT_APP_FIREBASE_APIKEY
    : "",
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN
    ? process.env.REACT_APP_FIREBASE_AUTHDOMAIN
    : "",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL
    ? process.env.REACT_APP_FIREBASE_DATABASEURL
    : "",
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID
    ? process.env.REACT_APP_FIREBASE_PROJECTID
    : ""
};

const app = firebase.initializeApp(config);
export const db = firebase.firestore(app);
