import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZEZxVogPcI5Lz2sH8LV_8zINsQyKmPyQ",
  authDomain: "project-coffee-1fcab.firebaseapp.com",
  projectId: "project-coffee-1fcab",
  storageBucket: "project-coffee-1fcab.appspot.com",
  messagingSenderId: "108030201310",
  appId: "1:108030201310:web:60f8b9b2890e4dae36a14f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app