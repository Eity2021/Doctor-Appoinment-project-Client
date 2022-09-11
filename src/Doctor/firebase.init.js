
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  apiKey: "AIzaSyAuGtOTgQ7zVEmZ58t1qZogn9p3AOUAj24",
  // authDomain: "doctor-portal-af23e.firebaseapp.com",
  // projectId: "doctor-portal-af23e",
  // storageBucket: "doctor-portal-af23e.appspot.com",
  // messagingSenderId: "190328487565",
  // appId: "1:190328487565:web:ca69ec56d3e4a0d195ecc4",
  // measurementId: "G-DTVDRSTDNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;