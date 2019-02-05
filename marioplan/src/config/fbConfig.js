 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyA7-NEOlSNMQHdP1i9XdQV2-WBaeniXKSw",
    authDomain: "marioplan-4b527.firebaseapp.com",
    databaseURL: "https://marioplan-4b527.firebaseio.com",
    projectId: "marioplan-4b527",
    storageBucket: "marioplan-4b527.appspot.com",
    messagingSenderId: "553598963410"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;