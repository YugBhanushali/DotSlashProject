import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);
    const [loading , setLoading] = useState(true);


    // sign in with google 
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    // sign out

    const logout = () => signOut(auth);

    const value = {
        currUser,
        setCurrUser,
        signinWithGoogle,
        logout
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}