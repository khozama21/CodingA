
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyCPseFo0JNbl4aDIXr8zrYkbdCx_tLoE40",
  authDomain: "codinga-17970.firebaseapp.com",
  projectId: "codinga-17970",
  storageBucket: "codinga-17970.appspot.com",
  messagingSenderId: "297986594089",
  appId: "1:297986594089:web:339c5e0ef62868d212d338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);