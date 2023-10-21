// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4f677.firebaseapp.com",
  projectId: "blog-4f677",
  storageBucket: "blog-4f677.appspot.com",
  messagingSenderId: "242470227018",
  appId: "1:242470227018:web:77e9b0676381ced2beeab3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);