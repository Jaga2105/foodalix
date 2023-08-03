// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkdl2wY299MGxtG1Q2xstiAjcnWl2z7U0",
  authDomain: "foodalix-9273b.firebaseapp.com",
  projectId: "foodalix-9273b",
  storageBucket: "foodalix-9273b.appspot.com",
  messagingSenderId: "838901627280",
  appId: "1:838901627280:web:17c518dd7e5527a1e49b15",
  measurementId: "G-CRB37W5JJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;