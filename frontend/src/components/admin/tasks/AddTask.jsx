import { useState } from "react"
import { createTask } from "../../../services/taskService"
import toast from "react-hot-toast"

export default function AddTask({ onClose }) {
  const [title, setTitle] = useState("")
  const [users, setUsers] = useState([])
  const [stage, setStage] = useState("ToDo")
  const [date, setDate] = useState("")
  const [priorityLevel, setPriorityLevel] = useState("Normal")

  function HandleSubmit(e) { 
    e.preventDefault() // Prevent default form action
    // Validation
    if (!title.trim()) {
      toast.error("Please enter a task title")
      return
    }

    // Task Service
    createTask(title, stage, date, priorityLevel)
      .then(res => {
        toast.success("Task created successfully!")
        setTitle("")
        setDate("")
        onClose() // Close modal on success
        console.log(res)
      })
      .catch(err => {
        console.error("Error creating task:", err)
        toast.error(err.response?.data?.message || "Failed to create task")
      })
  }
  
  return(
    <div>
      <div className="bg-white w-90 p-4 rounded-md text-gray-600">
        <h1 className="text-black text-md mb-2 font-bold">ADD TASK</h1>
        <div className="flex flex-col mb-2">
          <label htmlFor="Title">Task Title</label>
          <input 
          type="text" 
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-2 py-1.5 rounded-sm" />
        </div>
        {/* Change to Dropdown  */}
        <div className="flex flex-col mb-2">
          <label>Assign Task To:</label>
          <select
            value={users}
            onChange={(e) => setUsers(e.target.value)}
            className="border px-2 py-1.5 rounded-sm bg-white cursor-pointer"
          >
            <option value="">
              {users.length === 0 ? "None" : "Select User"}
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex flex-col">
            <label>Task Stage</label>
            <select 
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="border px-2 py-1.5 rounded-sm bg-white cursor-pointer"
            >
              <option value="ToDo">To Do</option>
              <option value="In-Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>Task Date</label>
            <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-2 py-1.5 rounded-sm" />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label>Priority Level</label>
          <select 
              value={priorityLevel}
              onChange={(e) => setPriorityLevel(e.target.value)}
              className="border px-2 py-1.5 rounded-sm bg-white cursor-pointer"
            >
              <option value="Normal">Normal</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
        </div>
        {/* Buttons */}
        <div className="flex gap-2 justify-end mt-4">
          <button 
            onClick={onClose}
            className="bg-gray-300 px-4 py-1 rounded-sm text-black hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={HandleSubmit}
            className="bg-green-500 px-4 py-1 rounded-sm text-white hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}