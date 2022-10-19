// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, getFirestore } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "curso-b1262.firebaseapp.com",
  projectId: "curso-b1262",
  storageBucket: "curso-b1262.appspot.com",
  messagingSenderId: "809502756158",
  appId: "1:809502756158:web:27eebd71b3975bac29706f",
  measurementId: "G-TNZKRDE017"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getAnalytics(firebaseApp);
// const db = getFirestore(firebaseApp);

export { db };