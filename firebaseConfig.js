// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYxu8KJdHgpb3gPi9GgVIsSuwwhJlLmJk",
  authDomain: "fir-chatapp-54786.firebaseapp.com",
  projectId: "fir-chatapp-54786",
  storageBucket: "fir-chatapp-54786.appspot.com",
  messagingSenderId: "523097648143",
  appId: "1:523097648143:web:ecac870a59228f039b477a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
