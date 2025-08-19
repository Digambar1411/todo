import { createContext, useContext, useState, type ReactNode } from "react";

type authContextType = {
  isLoggedIn: boolean;
  handleLogin: () => void;
};

const AuthContext = createContext<authContextType | undefined>(undefined);

const useAuth = () => {
	const context = useContext(AuthContext);
  if(!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = ()=>{
    setIsLoggedIn(prev => !prev);
  }
	return <AuthContext.Provider value={{isLoggedIn, handleLogin}}>
    {children}
  </AuthContext.Provider>;
};

export { AuthProvider, useAuth}
