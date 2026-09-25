/* =========================================================
   USHA LIVE AI
   FIREBASE CONFIGURATION
   ========================================================= */

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDyY-R2rCliamC9cxJOAFATOnnDJ0t30dA",
  authDomain: "ushaliveai.firebaseapp.com",
  projectId: "ushaliveai",
  storageBucket: "ushaliveai.firebasestorage.app",
  messagingSenderId: "686319624480",
  appId: "1:686319624480:web:5afe9c39aa8f2af39b7745",
  measurementId: "G-HMBS0H7LTT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Authentication
const auth = getAuth(app);


// Firestore Database
const db = getFirestore(app);


// Export
export {
  app,
  auth,
  db
};
