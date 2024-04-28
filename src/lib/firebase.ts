// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import  { getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5RzaVerI14KJ8jh4AwrFsNKs6gZfpAnQ",
  authDomain: "grem-759c9.firebaseapp.com",
  projectId: "grem-759c9",
  storageBucket: "grem-759c9.appspot.com",
  messagingSenderId: "950310964143",
  appId: "1:950310964143:web:34a61c32e1e80bebbb3d5a",
  measurementId: "G-R1B0YM5RG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);