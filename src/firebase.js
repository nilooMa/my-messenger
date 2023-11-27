import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC1YkCI_vA2XVWdLrc7kbSNYWX2TM6fo7c",
    authDomain: "m-messenger-b8b73.firebaseapp.com",
    projectId: "m-messenger-b8b73",
    storageBucket: "m-messenger-b8b73.appspot.com",
    messagingSenderId: "619699440570",
    appId: "1:619699440570:web:b038520d7c774268afeb83"
  }).auth();