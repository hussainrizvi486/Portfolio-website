import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_Q125eZPEInfoPrCZUcecyQei2go6o94",
    authDomain: "contact-form-2-2f52c.firebaseapp.com",
    projectId: "contact-form-2-2f52c",
    storageBucket: "contact-form-2-2f52c.appspot.com",
    messagingSenderId: "907529541984",
    appId: "1:907529541984:web:76f398928832156dcae605",
    measurementId: "G-QSPMCWZH2E"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();