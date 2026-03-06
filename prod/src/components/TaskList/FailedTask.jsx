import React from 'react'

const FailedTask = ({data}) => {
  return (
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-2xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>

        <h2 className="mt-5 text-xl font-semibold">
          {data.taskTitle}
        </h2>

        <p className="mt-4 text-sm">
          {data.taskDescription}
        </p>

        <div className="mt-5 bg-red-700 px-3 py-1 rounded w-fit text-sm">
          Failed
        </div>
      </div>
  )
}

export default FailedTask
