// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9J3CFaUsQKT0gebiY1ogo3owniDKAvWU",
  authDomain: "netflix-gpt-7439e.firebaseapp.com",
  projectId: "netflix-gpt-7439e",
  storageBucket: "netflix-gpt-7439e.appspot.com",
  messagingSenderId: "11195863481",
  appId: "1:11195863481:web:67fad74ff0dca51238a668",
  measurementId: "G-6G20VBKYLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();