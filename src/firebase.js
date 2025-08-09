// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr6SEvuXuyQ-5l6vyiGoRsxVMesC9QKOc",
  authDomain: "finance-cf6d3.firebaseapp.com",
  projectId: "finance-cf6d3",
  storageBucket: "finance-cf6d3.firebasestorage.app",
  messagingSenderId: "907977174730",
  appId: "1:907977174730:web:e4ce25a3b7cb49c6fe0e33",
  measurementId: "G-8WSCMBWHB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };