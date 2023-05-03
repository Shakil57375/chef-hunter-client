/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
export const AuthContext = createContext(null)
const goggleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const goggleRegister = () =>{
        return signInWithPopup(auth, goggleProvider)
    }
    const githubRegister = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () =>{
        return signOut(auth);
    }
    const updateUserData = (user, name) =>{
        return updateProfile(user, name)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            // console.log(currentUser);
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        registerUser,
        loginUser,
        goggleRegister,
        githubRegister,
        logOut,
        updateUserData
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;