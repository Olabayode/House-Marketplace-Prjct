import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABZP51vacYobKRASdPpuQSog5raYrBo4Q",
  authDomain: "house-marketplace-app-7864b.firebaseapp.com",
  projectId: "house-marketplace-app-7864b",
  storageBucket: "house-marketplace-app-7864b.appspot.com",
  messagingSenderId: "606871607532",
  appId: "1:606871607532:web:07fbd92cc39b6a73db2dc9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()