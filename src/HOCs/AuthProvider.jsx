import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  };
  const logOut = () => {
    setUser(null);
  };

  const value = { user, logIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
