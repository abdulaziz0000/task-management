import React from 'react'
import Header from '../Others/Header'
import AllTasks from '../Others/AllTasks'
import CreateTask from '../Others/CreateTask'

const AdminDashboard = (props) => {
  return (
    <div className='p-6 bg-[#131517c2] min-h-screen text-white'>
      
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTasks/>

     

    </div>
  )
}

export default AdminDashboard