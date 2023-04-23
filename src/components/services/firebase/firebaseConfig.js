import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBTpNTypAxHFIv4Fx-v4HwlGowFCRw-X3Y",
  authDomain: "backendmyweb.firebaseapp.com",
  projectId: "backendmyweb",
  storageBucket: "backendmyweb.appspot.com",
  messagingSenderId: "168292628885",
  appId: "1:168292628885:web:e8b6ae06f446ca91da1e9c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
