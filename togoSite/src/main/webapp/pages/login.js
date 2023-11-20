// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnYbqrefRPaXQWR06l554KvNC7rjIEB9o",
    authDomain: "startupipm.firebaseapp.com",
    projectId: "startupipm",
    storageBucket: "startupipm.appspot.com",
    messagingSenderId: "995574355548",
    appId: "1:995574355548:web:aa0fa875180b128de4b899",
    measurementId: "G-NJYNRXD6B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function registerUser() {
    const auth = getAuth();
    const email = document.getElementById('emailR').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}
function loginUser() {
    const auth = getAuth();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

