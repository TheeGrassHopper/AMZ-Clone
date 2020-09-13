import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBt251oUkuA_P_WmiIFjtC1I7UJeMdOLeM",
  authDomain: "store-a5366.firebaseapp.com",
  databaseURL: "https://store-a5366.firebaseio.com",
  projectId: "store-a5366",
  storageBucket: "store-a5366.appspot.com",
  messagingSenderId: "816379703780",
  appId: "1:816379703780:web:515bc35275400a2e38d7f1",
  measurementId: "G-LEJYY0T0QW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db  = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
