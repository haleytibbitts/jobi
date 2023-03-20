// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7yEce6hfWouWVrfA99_mRbb56Jqwrm8I",
  authDomain: "jobi-9e584.firebaseapp.com",
  databaseURL: "https://jobi-9e584-default-rtdb.firebaseio.com",
  projectId: "jobi-9e584",
  storageBucket: "jobi-9e584.appspot.com",
  messagingSenderId: "146937596536",
  appId: "1:146937596536:web:21a8bcd6567663c53ffb8d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
