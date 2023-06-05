import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../utilities/firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User
    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User Signin
    const signIn = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User Update Profile
    const profileUpdated = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    //   Signin With Google
    const signinWithGoogle = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Signout User
    const signout = () => {

        setLoading(true)
        return signOut(auth)
    }

    // User Observer 
    useEffect(() => {

        const unsubscriber = onAuthStateChanged(auth, cuurentUser => {

            setUser(cuurentUser)

            if (cuurentUser) {

                axios.post('http://localhost:5000/jwt')
                    .then(data => {
                        console.log(data.data.token);

                        localStorage.setItem('access-token', data.data.token)
                    })
            } else {
                localStorage.removeItem('access-token')
            }

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
        signIn,
        signinWithGoogle,
        profileUpdated,
        signout
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;