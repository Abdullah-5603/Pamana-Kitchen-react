import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePhoneNumber, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [bgColor, setBgColor] = useState(false);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () =>{
        return signOut(auth)
    }
    const googleSignInUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignInUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const UpdateUserName = (displayName) =>{
        return updateProfile(user,{
            displayName : displayName
        })
    }
    const UpdatePhoto = (photo) =>{
        return updateProfile(user,{
            photoURL : photo
        })
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        googleSignInUser,
        githubSignInUser,
        loading,
        setLoading,
        bgColor,
        setBgColor,
        UpdateUserName,
        UpdatePhoto
    }
    // console.log(user)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;