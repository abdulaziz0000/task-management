import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {

  const authData = useContext(AuthContext)

  if (!authData) {
    return <div className='text-white'>Loading...</div>
  }

  return (
    <div className='bg-[#1f2226] rounded-2xl mt-6 p-6 shadow-lg text-white'>

      <div className='overflow-x-auto'>

       
        <div className='min-w-[600px] bg-gray-800 py-3 px-5 flex rounded-lg font-semibold text-sm mb-4'>
          <h4 className='w-1/5'>Employee Name</h4>
          <h3 className='w-1/5 text-center'>New Task</h3>
          <h5 className='w-1/5 text-center'>Active</h5>
          <h5 className='w-1/5 text-center'>Completed</h5>
          <h5 className='w-1/5 text-center'>Failed</h5>
        </div>

   
        {authData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className='min-w-[600px] bg-gray-700 py-3 px-5 flex rounded-lg text-sm mb-3'
            >
              <h4 className='w-1/5'>{elem.firstName}</h4>

              <h3 className='w-1/5 text-center text-yellow-400'>
                {elem.taskCounts.newTask}
              </h3>

              <h5 className='w-1/5 text-center text-blue-400'>
                {elem.taskCounts.active}
              </h5>

              <h5 className='w-1/5 text-center text-green-400'>
                {elem.taskCounts.completed}
              </h5>

              <h5 className='w-1/5 text-center text-red-400'>
                {elem.taskCounts.failed}
              </h5>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default AllTasks