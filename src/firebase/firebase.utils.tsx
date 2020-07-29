import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDfoZTRU0uu4Yq0ZVrPBvy0u1djqEdqTI8",
  authDomain: "ecomm-db-2236c.firebaseapp.com",
  databaseURL: "https://ecomm-db-2236c.firebaseio.com",
  projectId: "ecomm-db-2236c",
  storageBucket: "ecomm-db-2236c.appspot.com",
  messagingSenderId: "1021999456210",
  appId: "1:1021999456210:web:a9c13f43bc81192e0eb20b",
  measurementId: "G-N5F645X1VM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
