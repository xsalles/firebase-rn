// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRXjzvQ9yfWXtRPgxrosqldV_q_s4qdYo",
  authDomain: "rnauth-ea534.firebaseapp.com",
  projectId: "rnauth-ea534",
  storageBucket: "rnauth-ea534.firebasestorage.app",
  messagingSenderId: "595308261367",
  appId: "1:595308261367:web:1030e6a144dce6bd6788f2",
  measurementId: "G-NWEHMJ9GBR"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

