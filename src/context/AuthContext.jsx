import { createContext, useContext, useState } from 'react';
import { auth } from '../firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithRedirect
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate()
    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function googleSignin() {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
        navigate('/')
    }
    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, googleSignin, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}