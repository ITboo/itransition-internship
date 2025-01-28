import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyALQSPrEC6Ezz_3lNBAuEBsGP64WrBkmb4',
  authDomain: "itransition-task4-92c74.firebaseapp.com",
  projectId: "itransition-task4-92c74",
  storageBucket: "itransition-task4-92c74.firebasestorage.app",
  messagingSenderId: "779177671248",
  appId: "1:779177671248:web:2956dcc8c983a4e2da2f55",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
