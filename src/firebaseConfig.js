// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4c011R3aGkuL1B4x2JFmbQNjJE779Rk8",
    authDomain: "desafio-firebase2-45f8d.firebaseapp.com",
    projectId: "desafio-firebase2-45f8d",
    storageBucket: "desafio-firebase2-45f8d.firebasestorage.app",
    messagingSenderId: "223064687783",
    appId: "1:223064687783:web:3fc822659fb74dc1dbc782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;