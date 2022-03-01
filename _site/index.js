// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyALkRoDZcYWniGiDP8i4HXIP46RNeGtVnI",

  authDomain: "devanveljicom.firebaseapp.com",

  projectId: "devanveljicom",

  storageBucket: "devanveljicom.appspot.com",

  messagingSenderId: "581400374067",

  appId: "1:581400374067:web:c3d6e19f968aa9660aac46",

  measurementId: "G-JSP9VW35TW"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = firebase. firestore(); 




firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });


///-------------------- old
function pasuser(form) { 
    if (form.id.value=="ashwin"||form.id.value=="bupin"||form.id.value=="varun"||form.id.value=="ness") { 
        if (form.pass.value=="konda") { location="assets/other/ogga_boga.mp4" } 
        else if(form.pass.value=="varun"){ location="assets/other/shark_video.MOV" } 
        else if(form.pass.value=="bupin"){ location="assets/other/rupin.jpeg" } 
        else if(form.pass.value=="ridge"){ location="assets/other/funnycat.png" } 
        else { alert("Wrong Password") } 
        } 
        else { alert("Wrong Username") } 
    } 

