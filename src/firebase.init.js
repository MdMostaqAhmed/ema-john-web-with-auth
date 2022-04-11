// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqnzCBRuBSF7Cx1m0hBUPPays92MZrUKY",
  authDomain: "ema-john-simple-d9d19.firebaseapp.com",
  projectId: "ema-john-simple-d9d19",
  storageBucket: "ema-john-simple-d9d19.appspot.com",
  messagingSenderId: "235396638829",
  appId: "1:235396638829:web:84f145632dc0f42cf93764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
