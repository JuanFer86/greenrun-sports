import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChAOz66EYYz9DfLQ3wIU7XtnQ6flKYqPg",
  authDomain: "authentication-greenrun.firebaseapp.com",
  projectId: "authentication-greenrun",
  storageBucket: "authentication-greenrun.appspot.com",
  messagingSenderId: "546225945101",
  appId: "1:546225945101:web:2d8e4973f1f89ad6b8b344",
  measurementId: "G-KGZW0CDTD5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();