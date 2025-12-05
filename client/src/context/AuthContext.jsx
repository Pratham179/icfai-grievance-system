import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Load from localStorage so refresh doesn’t log user out
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const updateUser = (data) => {
    setUser(data);
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
