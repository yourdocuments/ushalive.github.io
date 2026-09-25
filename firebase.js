// =========================================================
// USHA LIVE
// Firebase Configuration
// =========================================================

// Firebase Core
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Authentication
import { getAuth } from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Firestore
import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// =========================================================
// FIREBASE CONFIG
// =========================================================

const firebaseConfig = {
  apiKey: "AIzaSyDyY-R2rCliamC9cxJOAFATOnnDJ0t30dA",
  authDomain: "ushaliveai.firebaseapp.com",
  projectId: "ushaliveai",
  storageBucket: "ushaliveai.firebasestorage.app",
  messagingSenderId: "686319624480",
  appId: "1:686319624480:web:5afe9c39aa8f2af39b7745",
  measurementId: "G-HMBS0H7LTT"
};


// =========================================================
// INITIALIZE FIREBASE
// =========================================================

const app = initializeApp(firebaseConfig);


// =========================================================
// FIREBASE SERVICES
// =========================================================

const auth = getAuth(app);

const db = getFirestore(app);


// =========================================================
// EXPORT
// =========================================================

export {
  app,
  auth,
  db
};
