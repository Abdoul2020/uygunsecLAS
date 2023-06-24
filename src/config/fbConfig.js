// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  
    apiKey: "AIzaSyBY7GsGrteMqMsmHhs82-RWXjieItNLDb0",
  authDomain: "uyugunusec.firebaseapp.com",
  projectId: "uyugunusec",
  storageBucket: "uyugunusec.appspot.com",
  messagingSenderId: "214401251790",
  appId: "1:214401251790:web:d9a0199b65329b3482939f",
  measurementId: "G-RP8Y1J35H1"
   
};





const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

// firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })
// export default firebase;