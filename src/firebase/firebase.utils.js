import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCt-GJCCfy6ja2d5nIwwf0nuo5yQtl9UvY",
  authDomain: "crwn-db-781b7.firebaseapp.com",
  projectId: "crwn-db-781b7",
  storageBucket: "crwn-db-781b7.appspot.com",
  messagingSenderId: "369250613578",
  appId: "1:369250613578:web:cd13950857f0d107ffa9b3",
  measurementId: "G-LKM52WCR4L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;