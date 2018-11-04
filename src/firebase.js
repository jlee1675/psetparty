import firebase from 'firebase'
  const config = {
    apiKey: "AIzaSyBMIgZqVP_rQr8PiWQmt9riN1H2xBINirQ",
    authDomain: "pset-party.firebaseapp.com",
    databaseURL: "https://pset-party.firebaseio.com",
    projectId: "pset-party",
    storageBucket: "pset-party.appspot.com",
    messagingSenderId: "802611230861"
  };
  firebase.initializeApp(config);
  export default firebase;