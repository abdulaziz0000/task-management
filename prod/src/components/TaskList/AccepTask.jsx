import React from 'react'

const AccepTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-blue-500 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">


      <div className="flex justify-between items-center">
        <h3 className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-100">
          {data.taskDate}
        </h4>
      </div>

   
      <h2 className="mt-6 text-xl font-bold text-white">
        {data.taskTitle}
      </h2>


      <p className="mt-3 text-sm text-gray-100 leading-relaxed">
        {data.taskDescription}
      </p>


      <div className="flex justify-between gap-3 mt-6">
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition">
          Completed
        </button>

        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition">
          Failed
        </button>
      </div>

    </div>
  )
}

export default AccepTask