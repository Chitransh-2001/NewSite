// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// :white_check_mark: Correct Firebase config (you can keep this hardcoded or use env vars)
const firebaseConfig = {
  apiKey: "AIzaSyDXZk_dJd-L7PNx5TQ_uxqfiEunDQRqub8",
  authDomain: "adminboard-db0c6.firebaseapp.com",
  projectId: "adminboard-db0c6",
  storageBucket: "adminboard-db0c6.appspot.com", // :exclamation: fixed: was "firebasestorage.app" (invalid)
  messagingSenderId: "971399837898",
  appId: "1:971399837898:web:f150a7e3051ea447381c33",
  measurementId: "G-E0TEHG2SQ0"
};
// :white_check_mark: Initialize app only once (hot reload safe)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// :white_check_mark: Services
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth, onAuthStateChanged };