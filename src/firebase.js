import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config

const firebaseConfig = {
  apiKey: "AIzaSyBzPDxKPtIWB1WBGMJ0w-188t78aw8ttpw",
  authDomain: "whatsapp-clone-9c2d0.firebaseapp.com",
  projectId: "whatsapp-clone-9c2d0",
  storageBucket: "whatsapp-clone-9c2d0.appspot.com",
  messagingSenderId: "107463330002",
  appId: "1:107463330002:web:990bea3c47a00e2414050b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
