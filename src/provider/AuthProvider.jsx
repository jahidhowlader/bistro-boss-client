import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

import app from "../utilities/firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinWithGoogle = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {

        const unsubscriber = onAuthStateChanged(auth, cuurentUser => {
           
            setUser(cuurentUser)
            setLoading(false)
        })

        return () => {
            return unsubscriber
        }

    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signinWithGoogle
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;