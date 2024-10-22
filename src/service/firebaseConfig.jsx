// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCEk_U2R5QrKhXTB5lIf1rAnPPwU_QypE",
  authDomain: "ai-travel-planner-fead6.firebaseapp.com",
  projectId: "ai-travel-planner-fead6",
  storageBucket: "ai-travel-planner-fead6.appspot.com",
  messagingSenderId: "222217652749",
  appId: "1:222217652749:web:86301979db4a7fab21a344",
  measurementId: "G-78XTE42P60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);