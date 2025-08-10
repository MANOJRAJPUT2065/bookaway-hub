import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  loading: false,
  signIn: async () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Simulate checking auth status on mount
  useEffect(() => {
    setLoading(true);
    // Fake delay to simulate async user fetch
    setTimeout(() => {
      // Check localStorage or something here if you want persistence
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) setUser(storedUser);
      setLoading(false);
    }, 1000);
  }, []);

  const signIn = async (username, password) => {
    setLoading(true);
    // Fake login: replace with real API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeUser = { id: 1, name: username };
        setUser(fakeUser);
        localStorage.setItem("user", JSON.stringify(fakeUser));
        setLoading(false);
        resolve(fakeUser);
      }, 1000);
    });
  };

  const signOut = async () => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(null);
        localStorage.removeItem("user");
        setLoading(false);
        resolve();
      }, 500);
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
