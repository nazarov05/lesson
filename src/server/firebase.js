

import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl3L-1Ga8w24FkKT7bmldrTRym0iR1Ypk",
  authDomain: "lesson-002-4abd7.firebaseapp.com",
  projectId: "lesson-002-4abd7",
  storageBucket: "lesson-002-4abd7.appspot.com",
  messagingSenderId: "377332723784",
  appId: "1:377332723784:web:421d976145c7b4bb66287d",
  measurementId: "G-181S76JPNG"
  };
  
const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const db = app.firestore()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { db, auth, googleProvider }