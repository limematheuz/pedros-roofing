import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4kqN4lYk_hetn9I_p5ocZV9xvudz9cfM",
    authDomain: "rrj-website.firebaseapp.com",
    projectId: "rrj-website",
    storageBucket: "rrj-website.appspot.com",
    messagingSenderId: "1029946985715",
    appId: "1:1029946985715:web:a57a96fc355dfe0a047b86"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };