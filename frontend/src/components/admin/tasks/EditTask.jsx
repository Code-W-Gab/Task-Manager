import { useState, useEffect } from "react"
import { getTaskById, updateTask } from "../../../services/taskService"
import toast from "react-hot-toast"
import { getAllUser } from "../../../services/teamService"

export default function EditTask({ fetchTasks, fetchCompletedTasks, fetchInProgressTask, fetchTodoTask, onClose, id }) {
  const [title, setTitle] = useState("")
  const [stage, setStage] = useState("")
  const [date, setDate] = useState("")
  const [priorityLevel, setPriorityLevel] = useState("")
  const [users, setUsers] = useState([])
  const [assignedTo, setAssignedTo] = useState([])
  const [isAssignOpen, setIsAssignOpen] = useState(false)

  useEffect(() => {
    getTaskById(id)
      .then(res => {
        console.log("Task data:", res.data) // Debug log
        setTitle(res.data.Title)
        setStage(res.data.Stage)
        
        // Format date to YYYY-MM-DD for input[type="date"]
        if (res.data.Date) {
          const dateObj = new Date(res.data.Date)
          const formattedDate = dateObj.toISOString().split('T')[0]
          setDate(formattedDate)
        }
        
        setPriorityLevel(res.data.PriorityLevel)
        
        // Handle AssignedTo - could be array of IDs or array of objects
        if (Array.isArray(res.data.AssignedTo)) {
          const userIds = res.data.AssignedTo.map(user => 
            typeof user === 'object' ? user._id : user
          )
          setAssignedTo(userIds)
        }
      })
      .catch(err => {
        console.log(err)
        toast.error("Failed to fetch tasks")
      })
  }, [id])

  useEffect(() => {
    // Fetch all active users
    getAllUser()
      .then(res => {
        const activeUser = res.data.filter(user => user.Active == "Active")
        setUsers(activeUser)
      })
      .catch(err => console.error(err))
  }, [])
  
  const toggleAssignedUser = (userId) => {
    setAssignedTo((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    )
  }

  function handleUpdateTask(e) {
    e.preventDefault()
    if (!title.trim() || !stage.trim() || !date.trim() || !priorityLevel.trim()) {
      toast.error("Content cannot be empty.")
      return
    }

    updateTask(id, title, stage, date, priorityLevel, assignedTo)
      .then(res => {
        toast.success("Task successfully updated!")
        console.log(res)
        onClose()
        if (fetchTasks) fetchTasks()
        if (fetchCompletedTasks) fetchCompletedTasks()
        if (fetchInProgressTask) fetchInProgressTask()
        if (fetchTodoTask) fetchTodoTask()
      })
      .catch(err => {
        toast.error("Failed to update task.")
        console.log(err)
      })
  }
  
  return(
    <div>
      <div className="bg-white w-90 max-sm:w-80 p-4 rounded-md text-gray-600">
        <h1 className="text-black text-md mb-2 font-bold">EDIT TASK</h1>
        
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

        {/* Checkbox Dropdown - Shows all active users with checked state */}
        <div className="flex flex-col mb-2 relative">
          <label>Assign Task To:</label>
          <button
            type="button"
            onClick={() => setIsAssignOpen((v) => !v)}
            className="border px-2 py-1.5 rounded-sm bg-white text-left flex justify-between items-center"
          >
            <span>
              {assignedTo.length > 0
                ? `${assignedTo.length} user(s) assigned`
                : "No users assigned"}
            </span>
            <span className="text-gray-500">{isAssignOpen ? "▲" : "▼"}</span>
          </button>

          {isAssignOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 border rounded-sm bg-white max-h-48 overflow-auto shadow-lg z-10">
              {users.length === 0 && (
                <div className="px-2 py-2 text-sm text-gray-500">No active users available</div>
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
            onClick={handleUpdateTask}
            className="bg-green-500 px-4 py-1 rounded-sm text-white hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}