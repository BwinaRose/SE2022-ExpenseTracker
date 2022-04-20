// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAutjFNgLFLxIVO2wsOmyOJAOf5rmiOZCY",
    authDomain: "trackyourbread.firebaseapp.com",
    projectId: "trackyourbread",
    storageBucket: "trackyourbread.appspot.com",
    messagingSenderId: "932058951949",
    appId: "1:932058951949:web:92e8329770ed1913b64044",
    measurementId: "G-9ZKQGQPEMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);