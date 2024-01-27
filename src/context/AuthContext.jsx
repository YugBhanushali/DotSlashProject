import { useContext, createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth,provider } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((data)=>{
      setUser(data.user.email);
      localStorage.setItem("email",data.user.email);
      window.location.reload();
    });
  };

  const logOut = () => {
    signOut(auth);
    localStorage.clear();
  };

  useEffect(()=>{
    setUser(localStorage.getItem("email"));
  },[])

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => unsubscribe();
  // }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.array,
};

export const UserAuth = () => {
  return useContext(AuthContext);
};