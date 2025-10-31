import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from "react-toastify";
const firebaseConfig = {
    apiKey: "AIzaSyDjDtbM75xqQ82oAbbzJqtPwjQaoOZqCwI",
    authDomain: "netflix-app-61d46.firebaseapp.com",
    projectId: "netflix-app-61d46",
    storageBucket: "netflix-app-61d46.firebasestorage.app",
    messagingSenderId: "570731449655",
    appId: "1:570731449655:web:e9604bb8dfe90925e5deb2",
    measurementId: "G-6L6101VLCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, name, email, password)
        const user = res.user
        await addDoc(collection(db, 'users'),
            { uid: user.uid,
                name,
                authProvider: "local",
                email
             }
        )


    } catch (error) {
        toast.error(error.code)

    }
}

const login=async(email,password)=>{
    try {
      await   signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        toast.error(error.code)

        
    }
}

const logout=()=>{
    signOut(auth)
}

export {signUp,login,logout,db,auth}
