import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPv0ueQOY4BlUZE7DP9StTEkZUfQ9Kh58",
  authDomain: "fir-authproject-7c233.firebaseapp.com",
  projectId: "fir-authproject-7c233",
  storageBucket: "fir-authproject-7c233.appspot.com",
  messagingSenderId: "97287147848",
  appId: "1:97287147848:web:232eddab4a9b29d4f7237d",
  measurementId: "G-3RGH7PZTRN"
};

const app=initializeApp(firebaseConfig)
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export{auth,provider}
