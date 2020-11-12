import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnioTQ_N3rxc6s3uYC6YQ8M5k4XVxXr9I",
  authDomain: "amozon-clone-22fe5.firebaseapp.com",
  databaseURL: "https://amozon-clone-22fe5.firebaseio.com",
  projectId: "amozon-clone-22fe5",
  storageBucket: "amozon-clone-22fe5.appspot.com",
  messagingSenderId: "337630726508",
  appId: "1:337630726508:web:c1e6ca6a0c61cd604dcb49",
  measurementId: "G-QD0E9VGY03",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
