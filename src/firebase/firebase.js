import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBxDB2lpcnD-RPsk-Vstn3eXgnNblju9h0",
    authDomain: "aram-c408b.firebaseapp.com",
    projectId: "aram-c408b",
    storageBucket: "aram-c408b.appspot.com",
    messagingSenderId: "929665420613",
    appId: "1:929665420613:web:d9c5817c81c48e86c6422c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)