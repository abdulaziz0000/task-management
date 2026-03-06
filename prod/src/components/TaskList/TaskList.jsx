import React from 'react'
import AcceptTask from './AccepTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

      {data.tasks.map((task, idx) => {

        if (task.active) {
          return <AcceptTask key={idx} data={task} />
        }

        if (task.newTask) {
          return <NewTask key={idx} data={task} />
        }

        if (task.completed) {
          return <CompleteTask key={idx} data={task} />
        }

        if (task.failed) {
          return <FailedTask key={idx} data={task} />
        }

        return null
      })}

    </div>
  )
}

export default TaskList