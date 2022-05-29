import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDRh6ICu8FW7F9DHEk5SzyjN0wq4K77mzU",
  authDomain: "babble-2b19d.firebaseapp.com",
  databaseURL: 'https://babble-2b19d.firebaseio.com',
  projectId: "babble-2b19d",
  storageBucket: "babble-2b19d.appspot.com",
  messagingSenderId: "1004725310286",
  appId: "1:1004725310286:web:79cfc65843cc7b9abbc41f",
  measurementId: "G-BG7MPLSEDV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
