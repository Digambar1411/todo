import { type ReactNode } from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}:{children:ReactNode}) => {
  const isLoggedIn = localStorage.getItem('token') === null;
  return ( isLoggedIn ? children : <Navigate to="/signin" replace />)
}

export default ProtectedRoute