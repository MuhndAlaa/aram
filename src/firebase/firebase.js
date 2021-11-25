import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBLeIst_PcBmMxhAoVh-lrIQ28UnOeSFDs",
  authDomain: "my-trial-62b4b.firebaseapp.com",
  projectId: "my-trial-62b4b",
  storageBucket: "my-trial-62b4b.appspot.com",
  messagingSenderId: "168276035868",
  appId: "1:168276035868:web:fee97a9c9e4c97940b12d9",
  measurementId: "G-T64BMR6V2Q"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default firebase;