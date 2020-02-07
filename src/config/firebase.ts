import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseUrl: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    clientId: process.env.FIREBASE_CLIENTID
};

firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const firebaseAuth = (provider: firebase.auth.AuthProvider) => firebase.auth().signInWithPopup(provider);
const database = firebase.database().ref();

export const authRef = firebase.auth();
export const loginGoogle = () => firebaseAuth(googleAuthProvider);


