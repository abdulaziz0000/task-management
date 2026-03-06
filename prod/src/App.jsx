import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/LocalStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const authData  = useContext(AuthContext)
  const [loggedInUser, setLoggedInUser] = useState(null)
    console.log(authData, "Auth Data From Context")
    
      useEffect(() => {
    setLocalStorage()
    
  }, [])



  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){ 
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUser(userData.data)
      }

    }
  }, [authData])

const handleLogin = (email, password) => {

  if (email === "admin@gmail.com" && password === "1234") {
    setUser("admin")
 localStorage.setItem(
    "loggedInUser",
    JSON.stringify({
      role: "admin",
      data: { email }
    })
  )
  } else if (authData && authData.employees) {

    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    )

    if (employee) {
      setUser("employee")
      setLoggedInUser(employee)

    localStorage.setItem(
  "loggedInUser",
  JSON.stringify({
    role: "employee",
    data: employee
  })
)
    } else {
      alert("Invalid credentials")
    }

  } else {
    alert("User data not loaded yet")
  }
}

  return (
    <div>

      {!user ? <Login handleLogin={handleLogin} /> :" "}

      {user === "admin" && <AdminDashboard changeUser={setUser}  data={loggedInUser} />}

      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUser} />}
      

    </div>
  )
}

export default App