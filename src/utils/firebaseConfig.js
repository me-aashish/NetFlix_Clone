// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkNITjw_KVNhcMkSs2WBqPM343npS_fZA",
  authDomain: "moviestreamingapp-ce949.firebaseapp.com",
  projectId: "moviestreamingapp-ce949",
  storageBucket: "moviestreamingapp-ce949.appspot.com",
  messagingSenderId: "1074595218565",
  appId: "1:1074595218565:web:00b26385dbbe215685d5ec",
  measurementId: "G-TC5WLWPTYT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
