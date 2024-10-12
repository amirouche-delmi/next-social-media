// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PAI_KEY,
  authDomain: "next-social-media-d79f9.firebaseapp.com",
  projectId: "next-social-media-d79f9",
  storageBucket: "next-social-media-d79f9.appspot.com",
  messagingSenderId: "956846147820",
  appId: "1:956846147820:web:b12e121bbee68fae96bdc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);