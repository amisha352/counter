import { initializeApp } from "firebase/app";
import {getauth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxS_tM0c58UFE7farPHpb8zROoEzEPd7I",
  authDomain: "todo-app-a955c.firebaseapp.com",
  projectId: "todo-app-a955c",
  storageBucket: "todo-app-a955c.appspot.com",
  messagingSenderId: "921618525472",
  appId: "1:921618525472:web:20edfb0065bb8cdfaf7b45",
  measurementId: "G-MX0ZGYGG85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getauth();
export {app, auth};