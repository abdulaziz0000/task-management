import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../TaskList/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  console.log("from employee dashbo", props.data.employees)

  return (
    <div className="min-h-screen bg-[#303335] p-3 sm:p-6 lg:p-10">

      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        <Header changeUser={props.changeUser} data={props.data} />

        <TaskListNumbers data={props.data} />

        <TaskList data={props.data} />

      </div>

    </div>
  )
}

export default EmployeeDashboard