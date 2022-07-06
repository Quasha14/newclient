// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3lsOqMPAOSNybrC23HFMFLHojhX_Gms4",
  authDomain: "real-time-1ca13.firebaseapp.com",
  projectId: "real-time-1ca13",
  storageBucket: "real-time-1ca13.appspot.com",
  messagingSenderId: "836494613957",
  appId: "1:836494613957:web:53195e5b3ac879eea43fac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export{auth, provider};