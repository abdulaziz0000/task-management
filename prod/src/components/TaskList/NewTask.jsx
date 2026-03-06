import React from 'react'

const NewTask = ({data}) => {
  return (
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-2xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>

        <h2 className="mt-5 text-xl font-semibold">
          {data.taskTitle}
        </h2>

        <p className="mt-4 text-sm">
          {data.taskDescription}
        </p>

        <button className="mt-5 bg-white text-black px-3 py-1 rounded text-sm">
          Accepst Task
        </button>
      </div>
  )
}

export default NewTask
