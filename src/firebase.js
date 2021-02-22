import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9COexnLwnOsv0OMg3Fl6akMB3YUIILxA",
  authDomain: "snapchat-clone-2a7ee.firebaseapp.com",
  projectId: "snapchat-clone-2a7ee",
  storageBucket: "snapchat-clone-2a7ee.appspot.com",
  messagingSenderId: "905435692323",
  appId: "1:905435692323:web:2f8cca7656ba34adc3a096",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
