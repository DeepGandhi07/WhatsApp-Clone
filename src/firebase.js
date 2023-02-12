import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDCYTMm1rgzrDyqE3FWoCiuk-wA-2yKF6Y",
  authDomain: "whatsapp-cln-d0760.firebaseapp.com",
  projectId: "whatsapp-cln-d0760",
  storageBucket: "whatsapp-cln-d0760.appspot.com",
  messagingSenderId: "299872228610",
  appId: "1:299872228610:web:ad4c22a33a5d83da8ede1b",
  measurementId: "G-T68XV9JP1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
