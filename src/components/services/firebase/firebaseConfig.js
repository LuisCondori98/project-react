import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB2dVf3BbCni-6bLMnCeR9Ezd6ZDltxFqc",
  authDomain: "my-web-6e66e.firebaseapp.com",
  projectId: "my-web-6e66e",
  storageBucket: "my-web-6e66e.appspot.com",
  messagingSenderId: "1022679703999",
  appId: "1:1022679703999:web:9809a533bdf1672ef9c10a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

/*const firebaseConfig = {
  apiKey: "AIzaSyBTpNTypAxHFIv4Fx-v4HwlGowFCRw-X3Y",
  authDomain: "backendmyweb.firebaseapp.com",
  projectId: "backendmyweb",
  storageBucket: "backendmyweb.appspot.com",
  messagingSenderId: "168292628885",
  appId: "1:168292628885:web:e8b6ae06f446ca91da1e9c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)*/

