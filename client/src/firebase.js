// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-61robin.firebaseapp.com",
  projectId: "realestate-61robin",
  storageBucket: "realestate-61robin.appspot.com",
  messagingSenderId: "606870959831",
  appId: "1:606870959831:web:9d87e3b6c439bac0c8a292",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
