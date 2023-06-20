// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBTh4rMefcCy-3VQm7pVOhLpkTpxqMSXdM",
  authDomain: "tiktok-jornada-91755.firebaseapp.com",
  projectId: "tiktok-jornada-91755",
  storageBucket: "tiktok-jornada-91755.appspot.com",
  messagingSenderId: "503386917089",
  appId: "1:503386917089:web:5f66e76ab471832de54fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;