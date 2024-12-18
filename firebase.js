import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, onSnapshot } from "firebase/firestore"; // Nota que no importamos db aquí

const firebaseConfig = {
  apiKey: "AIzaSyCzv9cZXXAFL1vpd8b-Tg8ohkj_fldKbCY",
  authDomain: "wearable-24be8.firebaseapp.com",
  projectId: "wearable-24be8",
  storageBucket: "wearable-24be8.firebasestorage.app",
  messagingSenderId: "756393409315",
  appId: "1:756393409315:web:88ffc70e1a4257882d2a96",
  measurementId: "G-XG0PHXWQGH"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Esto proporciona acceso a la funcionalidad de autenticación
const provider = new GoogleAuthProvider();  // Crear el proveedor de Google
const db = getFirestore(app);  // Aquí definimos db usando getFirestore

// Exportamos las funciones y objetos necesarios
export { app, auth, provider, signOut, sendPasswordResetEmail, db, doc, getDoc, setDoc, onSnapshot, addDoc, collection };