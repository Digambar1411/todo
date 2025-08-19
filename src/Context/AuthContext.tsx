import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type authContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
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

  return <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    {children}
  </AuthContext.Provider>;
};

export { AuthProvider, useAuth}
