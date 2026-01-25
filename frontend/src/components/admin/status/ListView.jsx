import { ChevronUp, ChevronsUp, ArrowUpWideNarrow, Circle, Ellipsis, Plus } from "lucide-react"
import { formatDate } from "../../../utils/Date"
import { getInitials } from "../../../utils/userLogo"
import { useState } from "react"
import DeletePopUp from "../../common/DeletePopUp"
import { deleteTask } from "../../../services/taskService"
import toast from "react-hot-toast"

export default function ListView({ tasks, fetchTasks, fetchCompletedTasks, fetchInProgressTask, fetchTodoTask }) {
  const truncate = (text, max = 40) => text && text.length > max ? `${text.slice(0, max)}...` : text
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState(null)

  function handleDeleteTask(id) {
    deleteTask(id)
      .then(res => {
        toast.success("Task Successfully Deleted!")
        console.log(res)
        setIsModalOpen(false)
        if (fetchTasks) fetchTasks()
        if (fetchCompletedTasks) fetchCompletedTasks()
        if (fetchInProgressTask) fetchInProgressTask()
        if (fetchTodoTask) fetchTodoTask()
      })
      .catch(err => {
        toast.error("Failed to delete task")
        console.log(err)
      })
  }

  return(
    <div className="min-h-screen">
      <div className="bg-white p-2 rounded-sm">
        <div className="grid grid-cols-[4fr_2fr_repeat(3,1fr)] mb-2">
          <p>Task Title</p>
          <p>Priority</p>
          <p>Due</p>
          <p>Teams</p>
          <p>Actions</p>
        </div>
        {/* Divider */}
        <hr className="text-gray-300"/>
        {
          tasks.length === 0 
          ? <div>NO TASK ADDED</div>
          : tasks.map(task => (
            <div key={task._id} className="grid grid-cols-[4fr_2fr_repeat(3,1fr)] mt-4 border-b border-gray-300 pb-2">
              <div className="flex items-center gap-2 mb-0.5">
                <Circle size={10} className={`rounded-full ${task.Stage === "ToDo" ? "bg-blue-500 text-blue-500" : task.Stage === "In-Progress" ? "bg-orange-500 text-orange-500" : "bg-green-500 text-green-500 "}`}/>
                <span className="text-sm">{truncate(task.Title, 40)}</span>
              </div>
              <div className={`flex items-center gap-1 ${task.PriorityLevel === "Normal" ? "text-green-500" : task.PriorityLevel === "Medium" ? "text-orange-500" : "text-red-500"}`}>
                {task.PriorityLevel === "Normal" ? <ChevronUp size={15} /> : task.PriorityLevel === "Medium" ? <ChevronsUp size={15}/> : <ArrowUpWideNarrow size={15}/>}
                <span className="text-sm">{`${task.PriorityLevel} Priority`}</span>
              </div>
              <p className="text-sm text-gray-400">{formatDate(task.Date)}</p>
              
              {/* Display Assigned Users */}
              <div className="flex items-center gap-1">
                {task.AssignedTo && task.AssignedTo.length > 0 ? (
                  <>
                    {task.AssignedTo.slice(0, 3).map((user, index) => (
                      <div 
                        key={user._id || index}
                        className="size-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold"
                        title={user.FullName}
                      >
                        {getInitials(user.FullName)}
                      </div>
                    ))}
                    {task.AssignedTo.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{task.AssignedTo.length - 3}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-xs text-gray-400">Unassigned</span>
                )}
              </div>

              <div className="flex gap-4">
                <button className="text-green-500 text-sm">Edit</button>
                <button className="text-red-500 text-sm" onClick={() => {
                  setSelectedTaskId(task._id)
                  setIsModalOpen(true)
                }}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center ">
          <div className="bg-opacity-25">
            <DeletePopUp 
              title={"Task"}
              setIsModalOpen={setIsModalOpen} 
              onDelete={() => handleDeleteTask(selectedTaskId)}
            />
          </div>
        </div>
      )}
    </div>
  )
}