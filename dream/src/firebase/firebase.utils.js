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
export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...aditionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
