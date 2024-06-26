// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPsLD_NgSwchMrpG2U81UsH_USQGSiNZU",
    authDomain: "nurenai.firebaseapp.com",
    projectId: "nurenai",
    storageBucket: "nurenai.appspot.com",
    messagingSenderId: "667498046930",
    appId: "1:667498046930:web:cb281b053ddc016e18940b"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
