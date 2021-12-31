import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHcjHjEkHND4Bow7MOAuXprfztUdB8BN8",
  authDomain: "disney-clone-9ba58.firebaseapp.com",
  projectId: "disney-clone-9ba58",
  storageBucket: "disney-clone-9ba58.appspot.com",
  messagingSenderId: "1043799158683",
  appId: "1:1043799158683:web:6a541489efe224e6e77b3e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
