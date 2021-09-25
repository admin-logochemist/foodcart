// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj9hc1UWxezpr7qnvoiD4h31IgIPYoYLE",
  authDomain: "foodcart-e624a.firebaseapp.com",
  projectId: "foodcart-e624a",
  storageBucket: "foodcart-e624a.appspot.com",
  messagingSenderId: "202550559570",
  appId: "1:202550559570:web:8737f6548dcd866a48f08b"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const projstore=getStorage(app)
const provider = new GoogleAuthProvider();
export  {db,auth,provider,projstore};