import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSAq2kmuWvV7wYPU6N6UZv6u5lBqCd6pU",
  authDomain: "inventory-tracker-1bd32.firebaseapp.com",
  projectId: "inventory-tracker-1bd32",
  storageBucket: "inventory-tracker-1bd32.appspot.com",
  messagingSenderId: "409928398627",
  appId: "1:409928398627:web:6283bdbdded1fd6f1f3e96"
};

initializeApp(firebaseConfig);
export const db = getFirestore();