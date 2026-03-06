import React, { useState } from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate,setTaskDate] = useState('')
  const [assignTo,setAssignTo] = useState('')
  const [category,setCategory] = useState('')

  const [task,setTask] = useState([])

const submitHandler = (e) => {
  e.preventDefault()

  const newTask = {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle,
    taskDescription,
    taskDate,
    category
  }

  const employees = JSON.parse(localStorage.getItem("employees"))

  const employee = employees.find(
    (emp) => emp.firstName.toLowerCase() === assignTo.toLowerCase()
  )

  if (!employee) {
    alert("Employee does not exist")
    return
  }

  employee.tasks.push(newTask)

  console.log(employee.tasks)
  employee.taskCounts.newTask += 1

  localStorage.setItem("employees", JSON.stringify(employees))

  setTaskTitle("")
  setTaskDescription("")
  setTaskDate("")
  setAssignTo("")
  setCategory("")
}
  return (
      <div className='bg-[#1f2226] mt-6 p-8 rounded-xl shadow-lg max-w-4xl mx-auto'>
        
     <form onSubmit={submitHandler} className='flex flex-col gap-5'>

        <div>
          <h3 className='mb-2 text-sm font-semibold'>Task Title</h3>
          <input
            type='text'
            value={taskTitle}
            onChange={(e)=>setTaskTitle(e.target.value)}
            placeholder='Enter task title'
            className='w-full p-3 rounded-lg bg-[#2a2d32] border border-gray-600 outline-none focus:border-blue-400'
          />
        </div>

        <div>
          <h3 className='mb-2 text-sm font-semibold'>Description</h3>
          <textarea
            rows="4"
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}
            placeholder='Enter task description'
            className='w-full p-3 rounded-lg bg-[#2a2d32] border border-gray-600 outline-none focus:border-blue-400'
          ></textarea>
        </div>

        <div className='grid grid-cols-2 gap-4'>

          <div>
            <h3 className='mb-2 text-sm font-semibold'>Date</h3>
            <input
              type='date'
              value={taskDate}
              onChange={(e)=>setTaskDate(e.target.value)}
              className='w-full p-3 rounded-lg bg-[#2a2d32] border border-gray-600 outline-none focus:border-blue-400'
            />
          </div>

          <div>
            <h3 className='mb-2 text-sm font-semibold'>Assign To</h3>
            <input
              type='text'
              value={assignTo}
              onChange={(e)=>setAssignTo(e.target.value)}
              placeholder='Employee name'
              className='w-full p-3 rounded-lg bg-[#2a2d32] border border-gray-600 outline-none focus:border-blue-400'
            />
          </div>

        </div>

        <div>
          <h3 className='mb-2 text-sm font-semibold'>Category</h3>
          <input
            type='text'
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            placeholder='Design, Dev, Testing etc'
            className='w-full p-3 rounded-lg bg-[#2a2d32] border border-gray-600 outline-none focus:border-blue-400'
          />
        </div>

        <button
          type='submit'
          className='mt-4 bg-blue-500 hover:bg-blue-600 transition-all p-3 rounded-lg font-semibold'
        >
          Create Task
        </button>

      </form>


      </div>
  )
}

export default CreateTask
