// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbn7nHy7xUcJaT6fJw9kd4F7jj0KTqjLI",
  authDomain: "supervisor-form.firebaseapp.com",
  projectId: "supervisor-form",
  storageBucket: "supervisor-form.appspot.com",
  messagingSenderId: "1019732701163",
  appId: "1:1019732701163:web:93796a5745810a9a98b3ae",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
