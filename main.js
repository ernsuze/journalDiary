
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
);
// ---------- JOURNAL FIELD  ----------


// currentUid = " ";

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

 /*   function addNewEntryToProfile() {
    // grab from the container
    const journalForm = document.getElementById('editor');

// access the content inside(title, date, text content)
const eTitle = document.getElementById('entryTitle').value;
// how to get the date? text content i need to look into quill delta
const entryDate = 
const entries = 

// Create a data object with all the info you want to save:

journalData = { content: entries, createdAt: timestamp, title: journalTitle; entryID:'', // i want firebase to do this


    }
const popup = document.getElementById("popup");
    const logBtn = document.querySelector('#submitBtn');
logBtn.addEventListener('click', (e) => {
   if (currentUid === null) {
   e.preventDefault();
// popup for 'Session Timeout - Please login again. for maybe 3 seconds before redirecting to LOGIN page
   } else {
      //save it to the journal subcollection:
     
     addDoc(collection(db, "Users", currentUid, "JournalEntries"), journalData);
setTimeout(function() {
   popup.style.display = 'block';
}, 4000);
    

*/