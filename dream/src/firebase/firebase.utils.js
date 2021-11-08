import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const config = {
  apiKey: "AIzaSyC3Fb3eclbyRAzTiNPDTvdu9IV2_oQksGE",
  authDomain: "dream-clothing-db.firebaseapp.com",
  projectId: "dream-clothing-db",
  storageBucket: "dream-clothing-db.appspot.com",
  messagingSenderId: "896061385004",
  appId: "1:896061385004:web:32a1f1ef61ccc05229e489",
  measurementId: "G-2LF9Y5GH3B",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
