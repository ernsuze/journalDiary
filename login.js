
// Import Firebase core and features you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

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





// ----------------LOGIN FORM AUTH-----------------------


const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
e.preventDefault();

const email = loginForm['login-email'].value;
const password = loginForm['login-password'].value;

signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
   
    console.log("User logged!", userCredential);
  location.href='/index.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

});

// ---------------- AUTH CHANGES -----------------------

onAuthStateChanged(auth, (user) => {
console.log(user)
if (user) {
console.log('user logged in');

} else {

// User is signed out

console.log('user logged out');

}});