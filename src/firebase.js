// Import the functions you need from the SDKs 
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf2NwBFzhBAUqKceUhXIhC4DGx2W113fI",
  authDomain: "infinitysaga-9330c.firebaseapp.com",
  projectId: "infinitysaga-9330c",
  storageBucket: "infinitysaga-9330c.appspot.com",
  messagingSenderId: "612466266150",
  appId: "1:612466266150:web:94b130e95a9d5c0b5a56e7",
  measurementId: "G-ZMRGZDNXFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}