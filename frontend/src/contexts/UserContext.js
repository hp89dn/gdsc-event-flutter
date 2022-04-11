import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function setUser(user) {
    setCurrentUser(user);
  }

  const value = {
    currentUser,
    setUser,
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
}
