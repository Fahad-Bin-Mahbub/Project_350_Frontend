import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth"));
    if (data) {
      console.log("Inside provider auth")
      console.log("Parsed Data"+ JSON.stringify(data))
      setAuth(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
