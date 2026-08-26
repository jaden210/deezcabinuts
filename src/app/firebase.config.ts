// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBkuhlDIhzI8BjMCgdhTub1RO1pKMSfDk",
  authDomain: "deezcabnuts.firebaseapp.com",
  projectId: "deezcabnuts",
  storageBucket: "deezcabnuts.firebasestorage.app",
  messagingSenderId: "41371072226",
  appId: "1:41371072226:web:cddb88ad29754ee46d50bb",
  measurementId: "G-FLB66B0R8E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
