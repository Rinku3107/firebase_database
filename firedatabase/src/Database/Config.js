// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNHxtvoi29WbarfnH1TH9Jq6RA9JCx6uU",
  authDomain: "rinkudatabase.firebaseapp.com",
  projectId: "rinkudatabase",
  storageBucket: "rinkudatabase.appspot.com",
  messagingSenderId: "690790308768",
  appId: "1:690790308768:web:b6218db48ce581370e22c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const database = getFirestore(app);
