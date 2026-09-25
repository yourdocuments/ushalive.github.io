// =========================================================
// USHA LIVE
// Firebase Configuration
// =========================================================

// Firebase SDK
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
} from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// =========================================================
// FIREBASE CONFIG
// =========================================================
//
// IMPORTANT:
// নিচের configuration আপনার Firebase Console-এর
// Web App configuration দিয়ে replace করতে হবে.
//
// Firebase Console:
// Project Settings
// → General
// → Your apps
// → Web app
// → SDK setup and configuration
// → Config
//

const firebaseConfig = {

  apiKey: "PASTE_YOUR_FIREBASE_API_KEY",

  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",

  projectId: "PASTE_YOUR_PROJECT_ID",

  storageBucket: "PASTE_YOUR_PROJECT_ID.firebasestorage.app",

  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",

  appId: "PASTE_YOUR_APP_ID"

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
