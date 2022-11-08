// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjQ2cSAelXTx5ktEP_MzsC9xBzi8oaTmE",
  authDomain: "devoir-firebase-24831.firebaseapp.com",
  projectId: "devoir-firebase-24831",
  storageBucket: "devoir-firebase-24831.appspot.com",
  messagingSenderId: "1036241405118",
  appId: "1:1036241405118:web:cf71e97c46018ede22caef",
  measurementId: "G-5VD40XWEDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);




