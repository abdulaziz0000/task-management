const employees = [
  {
    id: 1,
    firstName: "Abdul Aziz",
    email: "employe@gmail.com",
    password: "1234",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create UI for login page using React and Tailwind",
        taskDate: "2026-03-07",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive issue in navbar",
        taskDate: "2026-03-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with authentication API",
        taskDate: "2026-03-04",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Rahul",
    email: "employee2@example.com",
    password: "1234",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Design employee dashboard layout",
        taskDate: "2026-03-07",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Profile Page",
        taskDescription: "Add profile edit functionality",
        taskDate: "2026-03-03",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task List Component",
        taskDescription: "Build reusable task list component",
        taskDate: "2026-03-06",
        category: "Frontend"
      }
    ]
  },

  {
    id: 3,
    firstName: "Aisha",
    email: "employee3@example.com",
    password: "1234",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search feature for tasks",
        taskDate: "2026-03-07",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fix",
        taskDescription: "Fix login validation bug",
        taskDate: "2026-03-01",
        category: "Debugging"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy project to server",
        taskDate: "2026-03-04",
        category: "DevOps"
      }
    ]
  },

  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@example.com",
    password: "1234",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API",
        taskDescription: "Build REST API for tasks",
        taskDate: "2026-03-07",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve database performance",
        taskDate: "2026-03-05",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Notifications",
        taskDescription: "Implement task notification system",
        taskDate: "2026-03-08",
        category: "Feature"
      }
    ]
  },

  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Redesign",
        taskDescription: "Redesign the user interface for better UX",
        taskDate: "2026-03-07",
        category: "Design"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "1234"
  }
]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

  return { employees, admin }
}