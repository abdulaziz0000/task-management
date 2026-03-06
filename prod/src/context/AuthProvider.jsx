import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

// localStorage.clear()
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
     setLocalStorage()
const { employees, admin } = getLocalStorage()
setUserData({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider