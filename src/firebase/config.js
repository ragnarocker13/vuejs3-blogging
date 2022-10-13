// import all libraries needed to execute the code below
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// config from the firebase Firestore
const firebaseConfig = {
    apiKey: "AIzaSyBcJb5awWNsfi3m-K41qt9T_ZFjAzr1vbE",
    authDomain: "vue-demo-app-f1560.firebaseapp.com",
    projectId: "vue-demo-app-f1560",
    storageBucket: "vue-demo-app-f1560.appspot.com",
    messagingSenderId: "231745845116",
    appId: "1:231745845116:web:050d5e295f95ef631f56f9"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service, sets up a connection to firestore
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  // export the variable
  export { projectFirestore, timestamp }