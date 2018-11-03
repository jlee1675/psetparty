import * as firebase from "firebase";
require("firebase/firestore");
 
 // Set the configuration for your app
var config = {
    apiKey: "AIzaSyBMIgZqVP_rQr8PiWQmt9riN1H2xBINirQ",
    authDomain: "pset-party.firebaseapp.com",
    databaseURL: "https://pset-party.firebaseio.com",
    projectId: "pset-party",
    storageBucket: "pset-party.appspot.com",
    messagingSenderId: "802611230861"
};

firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

const db = firebase.firestore();

export default db;