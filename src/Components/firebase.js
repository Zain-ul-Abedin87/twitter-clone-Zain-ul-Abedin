import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyALrl7vfELP6iZtlh_0icVj8F5_FK1e-OY",
  authDomain: "twitter-clone-7f762.firebaseapp.com",
  projectId: "twitter-clone-7f762",
  storageBucket: "twitter-clone-7f762.appspot.com",
  messagingSenderId: "367268212906",
  appId: "1:367268212906:web:b48690c3bc24d7f40b60d3",
  measurementId: "G-3VL3GHE4N5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;