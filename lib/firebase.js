import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const configAccount = JSON.parse(process.env.FIREBASE_SERVICE_CONFIG_KEY || "{}");
// :white_check_mark: Correct Firebase config (you can keep this hardcoded or use env vars)
const firebaseConfig = {
  apiKey:  configAccount.apiKey,
  authDomain: configAccount.authDomain, // :exclamation: fixed: was "firebaseapp.com" (invalid)
  projectId: configAccount.projectId,
  storageBucket: configAccount.storageBucket, // :exclamation: fixed: was "firebasestorage.app" (invalid)
  messagingSenderId: configAccount.messagingSenderId,
  appId: configAccount.appId,
  measurementId: configAccount.measurementId, // :exclamation: fixed: was "firebaseapp.com" (invalid)
};
// :white_check_mark: Initialize app only once (hot reload safe)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// :white_check_mark: Services
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth, onAuthStateChanged };
