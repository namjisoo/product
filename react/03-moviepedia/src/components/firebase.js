// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRBgZo4WFLP-3B5H1mOej_WKaR6hesCDo",
  authDomain: "project2-f6363.firebaseapp.com",
  projectId: "project2-f6363",
  storageBucket: "project2-f6363.appspot.com",
  messagingSenderId: "926258491108",
  appId: "1:926258491108:web:4948e79d5ef7aec5bd46f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result = querySnapshot.docs;
  const reviews = result.map((doc) => doc.data());
  console.log(reviews);
  return querySnapshot;
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
};
