
// Import Firebase core and features you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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





// ---------- HEADER ----------
const guestHeader = document.getElementById('guestLinks');

const logHeader = document.getElementById('userHeader');

    

    onAuthStateChanged(auth, (user) => {
    if (user) {
    
    const uid = user.uid;
    
if (guestHeader.style.display === 'block') {
guestHeader.style.display === 'none';
} else {
logHeader.style.display === 'block';
}    
    
    } else {
    
    // User is signed out
    
    location.href = '/landing.html';
    
    } });

    
// ---------- LOGOUT ----------

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
  console.log('Sign-out successful');
}).catch((error) => {
  // An error happened.
});
}
)
// ---------- JOURNAL FIELD  ----------
