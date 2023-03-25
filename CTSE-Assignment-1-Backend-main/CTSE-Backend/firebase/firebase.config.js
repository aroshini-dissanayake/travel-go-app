// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB8LxrsCriKaYeNGuADTm7r1BOLrbTrLo",
  authDomain: "ctse-assignment-1-f9268.firebaseapp.com",
  projectId: "ctse-assignment-1-f9268",
  storageBucket: "ctse-assignment-1-f9268.appspot.com",
  messagingSenderId: "181141868350",
  appId: "1:181141868350:web:c46d6651e3b7c6e912e66f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;
