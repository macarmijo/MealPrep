import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8g2HnRuEj-_LbbpKHlvTLCide1tfHlcE",
    authDomain: "react-coderhouse-c86b3.firebaseapp.com",
    projectId: "react-coderhouse-c86b3",
    storageBucket: "react-coderhouse-c86b3.appspot.com",
    messagingSenderId: "583040157354",
    appId: "1:583040157354:web:ab69ba80305ee1672b32d3"
}

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)