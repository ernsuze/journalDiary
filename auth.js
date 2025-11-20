
// Import Firebase core and features you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {   getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-functions.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBJRJ5cyIHk_vlgMP-gT1b_kBRRtpStkkQ",
authDomain: "[myjournal-diary.firebaseapp.com](http://myjournal-diary.firebaseapp.com/)",
projectId: "myjournal-diary",
storageBucket: "myjournal-diary.firebasestorage.app",
messagingSenderId: "898927027099",
appId: "1:898927027099:web:9aceb78c468e8f26ec773e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);




// ----------------REGISTRATION FORM AUTH-----------------------

const signupForm = document.querySelector('#registerform');

signupForm.addEventListener('submit', (e) => {
// prevent default action of page refreshing

e.preventDefault();

//get the user info being typed in

const email = signupForm['reg-email'].value;
const password = signupForm['reg-password'].value;
const fname = signupForm['reg-fname'].value;
const lname = signupForm['reg-lname'].value;


//connect to firebase sign up users
createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("User created!", cred.user);
    });

});