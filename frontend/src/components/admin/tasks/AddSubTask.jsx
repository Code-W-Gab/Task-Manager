import { useState } from "react"
import toast from "react-hot-toast"
import { addSubTask } from "../../../services/subTaskService"

export default function AddSubTask({ onClose, taskId, fetchTasks, fetchCompletedTasks, fetchInProgressTask, fetchTodoTask }) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [tag, setTag] = useState("")

  function handleAddSubTask(e) {
    e.preventDefault()
    
    if (!title.trim() || !date.trim() || !tag.trim) {
      toast.error("Please enter a sub-task title, date and tag")
      return
    }

    addSubTask(taskId, title, date, tag)
      .then(res => {
        toast.success("Sub-Task Successfully Created!")
        setTitle("")
        setDate("")
        setTag("")
        onClose()
        if (fetchTasks) fetchTasks()
        if (fetchCompletedTasks) fetchCompletedTasks()
        if (fetchInProgressTask) fetchInProgressTask()
        if (fetchTodoTask) fetchTodoTask()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        toast.error("Failed to add sub-task")
      })
  }

  return(
    <div className="bg-white w-100 p-4 rounded-md text-gray-600">
      <h1 className="text-black text-md mb-2 font-bold">ADD SUB-TASK</h1>
      <div className="flex flex-col mb-2">
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Sub Task Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-2 py-1.5 rounded-sm" 
        />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="flex flex-col">
          <label>Task Date</label>
          <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-2 py-1.5 rounded-sm" 
          />
        </div>
        <div className="flex flex-col mb-2">
          <label>Tag</label>
          <input 
            type="text" 
            placeholder="Tag..."
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="border px-2 py-1.5 rounded-sm" 
          />
        </div>
      </div>
      <div className="flex items-center gap-2 justify-end mt-4">
        <button
          onClick={onClose}
          className="bg-gray-300 px-4 py-1 rounded-sm text-black hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleAddSubTask}
          className="bg-green-500 px-4 py-1 rounded-sm text-white hover:bg-green-600 transition-colors"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}