// ----------------REGISTRATION FORM AUTH-----------------------

const signupForm = document.querySelector('#registerform');

signupForm.addEventListener('submit', (e) => {
// prevent default action of page refreshing

e.preventDefault();

//get the user info being typed in

const email = signupForm['email'].value;
const password = signupForm['password'].value;
const fname = signupForm['fname'].value;
const lname = signupForm['lname'].value;

});

//connect to firebase sign up users

auth.createUserWithEmailAndPassword(email, password).then(cred => {
console.log(email, password);
})


