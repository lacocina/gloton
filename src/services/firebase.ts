// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwW5uNQrL0vz2q9nDAdQDOpOz1qBaIjhw",
    authDomain: "gloton-app.firebaseapp.com",
    databaseURL: "https://gloton-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gloton-app",
    storageBucket: "gloton-app.appspot.com",
    messagingSenderId: "951148555737",
    appId: "1:951148555737:web:30da8e45bc74eb2e91bdc8",
    measurementId: "G-0KE55DJZZP"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
