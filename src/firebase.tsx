// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-j0-ngZprF-2beiw1YBH5WCs9sf0gBBI",
  authDomain: "summarist-f7bdd.firebaseapp.com",
  projectId: "summarist-f7bdd",
  storageBucket: "summarist-f7bdd.firebasestorage.app",
  messagingSenderId: "574268011157",
  appId: "1:574268011157:web:da04f364ebc8cfb608a19c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
