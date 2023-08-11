import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

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

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
