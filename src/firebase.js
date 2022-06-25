// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/app"
 import {initializeApp} from 'firebase/app'
 import {getAuth} from 'firebase/auth';
// // import {getFirestore} from 'firebase/firestore'
 const firebaseConfig = {
    apiKey: "AIzaSyBs5AxoRRA5FrmCAhEo1SIIL7TvYDCwJHs",
    authDomain: "clone-13b58.firebaseapp.com",
    projectId: "clone-13b58",
    storageBucket: "clone-13b58.appspot.com",
    messagingSenderId: "24993632699",
    appId: "1:24993632699:web:8f332bb293cb8dbc4bb49e",
    measurementId: "G-VMF6Q4BLX3"
  }

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

//   const firebaseApp =firebase.initializeApp(firebaseConfig)
//   const auth = firebaseApp.firestore();
//   const db =firebaseApp.firestore();
//   export {db,auth};