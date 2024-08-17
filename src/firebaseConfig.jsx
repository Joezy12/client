
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrhfyJFmUKpCIh4E43N4IDHuddEDO-Xco",
  authDomain: "fbno-31bc9.firebaseapp.com",
  projectId: "fbno-31bc9",
  storageBucket: "fbno-31bc9.appspot.com",
  messagingSenderId: "277647936236",
  appId: "1:277647936236:web:d483b8c8befa2ce73433c9",
  measurementId: "G-YY825HWVHF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const storage = getStorage(app);