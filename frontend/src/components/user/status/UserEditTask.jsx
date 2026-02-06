import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { getMyTaskById, updateTask } from "../../../services/userTaskService"

export default function UserEditTask({id, onClose, fetchTasks, fetchTodoTask, fetchInProgressTask, fetchCompletedTasks}) {
  const [title, setTitle] = useState("")
  const [stage, setStage] = useState("")
  const [date, setDate] = useState("")
  const [priorityLevel, setPriorityLevel] = useState("")

  useEffect(() => {
    getMyTaskById(id)
      .then(res => {
        setTitle(res.data.Title)
        setStage(res.data.Stage)
        
        // Format date to YYYY-MM-DD for input[type="date"]
        if (res.data.Date) {
          const dateObj = new Date(res.data.Date)
          const formattedDate = dateObj.toISOString().split('T')[0]
          setDate(formattedDate)
        }
        
        setPriorityLevel(res.data.PriorityLevel)

      })
      .catch(err => {
        console.log(err)
        toast.error("Failed to fetch tasks")
      })
  }, [id])
 

  function handleUpdateTask(e) {
    e.preventDefault()
    if (!stage.trim()) {
      toast.error("Please select a stage.")
      return
    }

    updateTask(id, stage)
      .then(res => {
        toast.success("Task successfully updated!")
        console.log(res)
        onClose()
        // Call all available fetch functions
        fetchTasks?.()
        fetchTodoTask?.()
        fetchInProgressTask?.()
        fetchCompletedTasks?.()
      })
      .catch(err => {
        toast.error("Failed to update task.")
        console.log(err)
      })
  }
  
  return(
    <div>
      <div className="bg-white w-90 p-4 rounded-md text-gray-600">
        <h1 className="text-black text-md mb-2 font-bold">EDIT TASK</h1>
        
        <div className="flex flex-col mb-2">
          <label htmlFor="Title">Task Title</label>
          <input 
            readOnly
            type="text" 
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-2 py-1.5 rounded-sm" 
          />
        </div>

        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex flex-col">
            <label>Task Stage</label>
            <select 
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="border px-2 py-1.5 rounded-sm border-red-700 bg-white cursor-pointer"
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
              readOnly
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
            disabled
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