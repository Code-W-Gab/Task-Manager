import { useState, useEffect } from "react"
import { createTask } from "../../../services/taskService"
import { getAllUser } from "../../../services/teamService"
import toast from "react-hot-toast"

export default function AddTask({ onClose, fetchTasks, tasks }) {
  const [title, setTitle] = useState("")
  const [stage, setStage] = useState("")
  const [date, setDate] = useState("")
  const [priorityLevel, setPriorityLevel] = useState("")
  const [users, setUsers] = useState([])
  const [assignedTo, setAssignedTo] = useState([])
  const [isAssignOpen, setIsAssignOpen] = useState(false)

  useEffect(() => {
    getAllUser()
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }, [])

  
  const toggleAssignedUser = (userId) => {
    setAssignedTo((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    )
  }

  function HandleSubmit(e) { 
    e.preventDefault()
    
    if (!title.trim()) {
      toast.error("Please enter a task title")
      return
    }

    createTask(title, assignedTo, stage, date, priorityLevel)
      .then(res => {
        toast.success("Task created successfully!")
        setTitle("")
        setAssignedTo([])
        setStage("")
        setDate("")
        setPriorityLevel("")
        fetchTasks()
        onClose()
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
            className="border px-2 py-1.5 rounded-sm" 
          />
        </div>

        {/* Checkbox Dropdown */}
        <div className="flex flex-col mb-2 relative">
          <label>Assign Task To:</label>
          <button
            type="button"
            onClick={() => setIsAssignOpen((v) => !v)}
            className="border px-2 py-1.5 rounded-sm bg-white text-left flex justify-between items-center"
          >
            <span>
              {assignedTo.length > 0
                ? `${assignedTo.length} user(s) selected`
                : "Select users"}
            </span>
            <span className="text-gray-500">{isAssignOpen ? "▲" : "▼"}</span>
          </button>

          {isAssignOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 border rounded-sm bg-white max-h-48 overflow-auto shadow-lg z-10">
              {users.length === 0 && (
                <div className="px-2 py-2 text-sm text-gray-500">No users found</div>
              )}
              {users.map((user) => (
                <label 
                  key={user._id} 
                  className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={user._id}
                    checked={assignedTo.includes(user._id)}
                    onChange={() => toggleAssignedUser(user._id)}
                    className="cursor-pointer"
                  />
                  <span>{user.FullName}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex flex-col">
            <label>Task Stage</label>
            <select 
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="border px-2 py-1.5 rounded-sm bg-white cursor-pointer"
            >
              <option value="">Select Stage</option>
              <option value="ToDo">To Do</option>
              <option value="In-Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>Task Due Date</label>
            <input 
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border px-2 py-1.5 rounded-sm" 
            />
          </div>
        </div>

        <div className="flex flex-col mb-2">
          <label>Priority Level</label>
          <select 
            value={priorityLevel}
            onChange={(e) => setPriorityLevel(e.target.value)}
            className="border px-2 py-1.5 rounded-sm bg-white cursor-pointer"
          >
            <option value="">Select Priority</option>
            <option value="Normal">Normal</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

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