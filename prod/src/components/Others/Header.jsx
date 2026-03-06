import React from 'react'

const Header = ({ changeUser, data }) => {

  const username = data ? data.firstName : "User"

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", '')
    changeUser()
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-white">

      <h1 className="text-xl sm:text-2xl font-medium">
        Hello. <br/>
        <span className="text-2xl sm:text-3xl font-semibold">
          {username} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-200 w-full sm:w-auto"
      >
        Logout
      </button>

    </div>
  )
}

export default Header