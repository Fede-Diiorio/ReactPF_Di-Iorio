import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBkJQc0ZyROjQ6TkrkgTN-EVYLVBkQzc_0",
    authDomain: "ecommercereact-9a4fe.firebaseapp.com",
    projectId: "ecommercereact-9a4fe",
    storageBucket: "ecommercereact-9a4fe.appspot.com",
    messagingSenderId: "170490158863",
    appId: "1:170490158863:web:4169bba10a77a2d82f287a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)