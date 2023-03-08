// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCManAhMdcvFASzxy0Umh8qflClEbhHkx8",
  authDomain: "chat-app-7e378.firebaseapp.com",
  projectId: "chat-app-7e378",
  storageBucket: "chat-app-7e378.appspot.com",
  messagingSenderId: "204808489762",
  appId: "1:204808489762:web:6e963b548b6d626ba0337b",
  measurementId: "G-7TMBYJ5WRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)