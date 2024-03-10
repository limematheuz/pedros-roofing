import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk9irB5Erf6qOGS7XZHkvBpCTQ7eNiA6k",
  authDomain: "pedros-remodeling.firebaseapp.com",
  projectId: "pedros-remodeling",
  storageBucket: "pedros-remodeling.appspot.com",
  messagingSenderId: "373178603613",
  appId: "1:373178603613:web:7947cb84576a8a8f4315b4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
