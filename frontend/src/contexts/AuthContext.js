import React, { useContext, useState, useLayoutEffect } from "react";
import { auth } from "../firebase";
import fetch from "../axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [roles, setRoles] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useLayoutEffect(() => {
    const fetchAuth = async () =>
      await fetch
        .get("/auth/verify")
        .then(async ({ data }) => {
          await setRoles(data.roles);
          await setCurrentUser(data.user);
          await setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });

    fetchAuth();
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    roles,
    setRoles,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
