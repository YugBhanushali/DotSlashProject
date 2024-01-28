// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIekgzTia85ie6WhBu63WJe5T-8CDFFy8",
  authDomain: "dotslash-7.firebaseapp.com",
  projectId: "dotslash-7",
  storageBucket: "dotslash-7.appspot.com",
  messagingSenderId: "371478871373",
  appId: "1:371478871373:web:2b77ce504ae9b6a9af8b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);