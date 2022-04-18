// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7D3zQLBFz1tJJnW6t77dFd7vK9Yv9xVs",
  authDomain: "photography-assgn10.firebaseapp.com",
  projectId: "photography-assgn10",
  storageBucket: "photography-assgn10.appspot.com",
  messagingSenderId: "145337547854",
  appId: "1:145337547854:web:69aa2ca4fc5b94c02ad71f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;