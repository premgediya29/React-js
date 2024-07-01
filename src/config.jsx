import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAE5DZDB_moFPHnLaDNhjeuQ1-YnSM7rE0",
  authDomain: "fir-authenticate-a7f0a.firebaseapp.com",
  projectId: "fir-authenticate-a7f0a",
  storageBucket: "fir-authenticate-a7f0a.appspot.com",
  messagingSenderId: "674255062248",
  appId: "1:674255062248:web:25040f9565d62cadc4755d",
  measurementId: "G-CKFLNFZZDB"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };