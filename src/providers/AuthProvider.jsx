import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut   } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>
    {
        return signOut(auth);
    }
    useEffect(()=>
    {
       const unsubscribe = onAuthStateChanged(auth, currentUser=>
            {
                setUser(currentUser);
                setLoading(false)
            });
            return ()=>{
                return unsubscribe();
            }
    },[])

    const AuthInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value= {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;