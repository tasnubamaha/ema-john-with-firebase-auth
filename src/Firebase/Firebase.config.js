// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBwBYrn6XKUH09wYD_3QpKDtz7qxMTKZI",
  authDomain: "ema-john-with-firebase-a-1b19c.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-1b19c",
  storageBucket: "ema-john-with-firebase-a-1b19c.appspot.com",
  messagingSenderId: "35510664428",
  appId: "1:35510664428:web:d5e3539dd26d47346839c9",
  measurementId: "G-RNRCFC5M3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;