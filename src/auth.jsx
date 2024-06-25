import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDTeE1tWxfdrrZDG9i5U5VEhow_TBZmNkw",
  authDomain: "task-26227.firebaseapp.com",
  projectId: "task-26227",
  storageBucket: "task-26227.appspot.com",
  messagingSenderId: "906090264604",
  appId: "1:906090264604:web:db129cbbfeb020446387d9",
  measurementId: "G-0DWFMV37F2"
};

const app=initializeApp(firebaseConfig)
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export{auth,provider}
