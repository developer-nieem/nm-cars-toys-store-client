import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {  GoogleAuthProvider,  createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

const auth = getAuth(app)


    const [user , setUser] =  useState(null);
    const [loading, setLoading] =  useState(true);

    // user created with email & pass
    const createUser =(email, pass)=>{
        
            return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Update profile

    const userProfile = (name, photo) =>{
       return  updateProfile(auth.currentUser,{
        displayName:name, photoURL:photo
       })
    }

    // Login user 
    const signInUser = (email,pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // sign in with google 
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    // manage current user 

    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth, (loggedUser) =>{
            setUser(loggedUser);
            setLoading(false);
    })
    return () =>{
        unsubscribe()
    }
    },[])
       

    // log out
    const logOut = () =>{
      return  signOut(auth);
    }
    const authInfo ={
        user,
        loading,
        createUser,
        userProfile,
        signInUser,
        loginWithGoogle,
        logOut
    }
    return (
        
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;