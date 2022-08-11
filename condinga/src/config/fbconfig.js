import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Firestore } from "firebase/firestore";


//initialize firebase app
const config = {
    apiKey: "AIzaSyCPseFo0JNbl4aDIXr8zrYkbdCx_tLoE40",
    authDomain: "codinga-17970.firebaseapp.com",
    projectId: "codinga-17970",
    storageBucket: "codinga-17970.appspot.com",
    messagingSenderId: "297986594089",
    appId: "1:297986594089:web:339c5e0ef62868d212d338"
  };
  firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 