// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo5wORypuzZDws-bnHj_YFaUNpPuh7Fc4",
  authDomain: "assignment10-foodrecipe.firebaseapp.com",
  projectId: "assignment10-foodrecipe",
  storageBucket: "assignment10-foodrecipe.appspot.com",
  messagingSenderId: "580770008390",
  appId: "1:580770008390:web:01b6ec4379c79cc1e26947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;