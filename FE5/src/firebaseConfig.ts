import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFYp77UxFw98fAGrLM8vhMcHaoFQm2ZNw",
    authDomain: "kickmap-8f6c7.firebaseapp.com",
    databaseURL: "https://kickmap-8f6c7-default-rtdb.firebaseio.com",
    projectId: "kickmap-8f6c7",
    storageBucket: "kickmap-8f6c7.appspot.com",
    messagingSenderId: "992183460289",
    appId: "1:992183460289:web:559b644f0ebc931591cf40",
    measurementId: "G-D69XJ24Y97"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);