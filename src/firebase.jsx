import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqULs-nYgrEHRsP4mVZrdEkVse8_kCiQA",
  authDomain: "fir-iv-f592e.firebaseapp.com",
  databaseURL: "https://fir-iv-f592e-default-rtdb.firebaseio.com",
  projectId: "fir-iv-f592e",
  storageBucket: "fir-iv-f592e.appspot.com",
  messagingSenderId: "190978503695",
  appId: "1:190978503695:web:845cf057d344339d0c1f7a",
  measurementId: "G-3VVYFBSSW6"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
