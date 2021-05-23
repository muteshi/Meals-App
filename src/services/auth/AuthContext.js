import React from "react";
import * as firebase from "firebase";
import { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./AuthService";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setLoading(false);
        setUser(user);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.toString());
      });
  };

  const onRegister = (username, password) => {
    setLoading(true);
    registerRequest(username, password)
      .then((user) => {
        setLoading(false);
        setUser(user);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  };

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setLoading(false);
    } else {
      setLoading(false);
    }
  });

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
