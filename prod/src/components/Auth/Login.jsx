import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)

    setemail("")
    setPassword("")
  }

  return (
    <div className='flex items-center justify-center min-h-screen px-4 bg-[#1f2226]'>

      <div className='w-full max-w-md bg-[#2a2d32] shadow-lg rounded-xl p-8 border border-green-200'>

        <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-6 text-indigo-200'>
          Login
        </h2>

        <form onSubmit={submitHandler} className='flex flex-col gap-4'>

          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder='Enter Email'
            className='w-full border text-white border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent'
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='w-full border text-white border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent'
          />

          <button
            type="submit"
            className='bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-200'
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login