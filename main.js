
// Import Firebase core and features you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import { getFirestore, collection, getDocs, setDoc, doc, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
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
    signOut(auth).then(() => {
  console.log('Sign-out successful');
}).catch((error) => {
  console.error('Logout error:', error);
});
});
// ---------- JOURNAL FIELD  ----------


let currentUid = null;

  onAuthStateChanged(auth, (user) => {



if (user) {
        // User is logged in
           currentUid = user.uid;
        guestHeader.style.display = 'none';
        logHeader.style.display = 'block';
    } else {
       currentUid = null;
        // User is logged out
        guestHeader.style.display = 'block';
        logHeader.style.display = 'none';

         location.href = '/landing.html';
    }
});  
    
 
// Define the function
function addNewEntryToProfile() {
    if (currentUid === null) {
        return; // Exit if not logged in
    }
    
    // Gather data
    const eTitle = document.getElementById('entryTitle').value;
    const entryDate = serverTimestamp();
    const entries = quill.getContents().ops;
    // resource: https://github.com/slab/quill/issues/2300
    
    const journalData = { 
        content: entries, 
        createdAt: entryDate, 
        title: eTitle
    };

    // Save to Firebase
    addDoc(collection(db, "Users", currentUid, "JournalEntries"), journalData);
    
     // Clear the form AFTER saving
    document.getElementById('entryTitle').value = '';  // Clear title input
    quill.setContents([]);  // Clear Quill editor

    // Show popup
    const popup = document.getElementById("popup");
    popup.classList.add('show');
   setTimeout(function() {
    popup.classList.remove('show');
}, 1000);
}

// Set up the button to call the function
const logBtn = document.querySelector('#submitBtn');
logBtn.addEventListener('click', (e) => {
    addNewEntryToProfile(); // This calls the function above
});

  