
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWlhNENfSe5esdz4WU-OR03otg-ylGbj8",
  authDomain: "fir-authentication-67f25.firebaseapp.com",
  projectId: "fir-authentication-67f25",
  storageBucket: "fir-authentication-67f25.firebasestorage.app",
  messagingSenderId: "148177810450",
  appId: "1:148177810450:web:acb2d9ab9f86b2a7a3d4cb",
  measurementId: "G-C0R4PSY92T"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
