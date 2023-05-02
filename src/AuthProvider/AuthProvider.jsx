/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
export const AuthContext = createContext(null)
const goggleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const user = {displayName : "mohammad"}
    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const goggleSignUp = () =>{
        return signInWithPopup(auth, goggleProvider)
    }
    const githubSignUp = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const authInfo = {
        user,
        registerUser,
        loginUser,
        goggleSignUp,
        githubSignUp
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