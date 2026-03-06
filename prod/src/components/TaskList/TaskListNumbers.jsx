import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

      <div className="rounded-xl py-8 px-6 bg-red-400 text-white">
        <h2 className="text-3xl font-bold">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg font-mono">New Task</h3>
      </div>

      <div className="rounded-xl py-8 px-6 bg-blue-400 text-white">
        <h2 className="text-3xl font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-lg font-mono">Active Task</h3>
      </div>

      <div className="rounded-xl py-8 px-6 bg-green-400 text-white">
        <h2 className="text-3xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-lg font-mono">Completed Task</h3>
      </div>

      <div className="rounded-xl py-8 px-6 bg-purple-400 text-white">
        <h2 className="text-3xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-lg font-mono">Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers