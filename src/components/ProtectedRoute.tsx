import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({children}:{children:ReactNode}) => {
  const {isLoggedIn } = useAuth();

  return ( isLoggedIn ? children : <Navigate to="/signin" replace />)
}

export default ProtectedRoute