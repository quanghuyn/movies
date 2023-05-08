// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGsBV2ZcN3mpeGNyKi0UdAj9g4yTkYnYk",
  authDomain: "movies-c4265.firebaseapp.com",
  projectId: "movies-c4265",
  storageBucket: "movies-c4265.appspot.com",
  messagingSenderId: "587730397511",
  appId: "1:587730397511:web:e1700d558c7936998b0462"
};

// Initialize Firebase
 const app =  initializeApp(firebaseConfig);

 export const db = getFirestore(app)
 export const auth = getAuth(app)