import { useState } from "react"
import { ChevronUp, ChevronsUp, ArrowUpWideNarrow, Circle, Ellipsis, Plus } from "lucide-react"
import { formatDate } from "../../../utils/Date"
import { getInitials } from "../../../utils/userLogo"
import DotBtn from "../../common/3DotBtn"
import DeletePopUp from "../../common/DeletePopUp"
import { deleteTask } from "../../../services/taskService"
import toast from "react-hot-toast"

export default function BoardView({tasks, fetchTasks, fetchCompletedTasks, fetchInProgressTask, fetchTodoTask}) {
  const [subTask, setSubTask] = useState("No Sub-Task")
  const truncate = (text, max) => text && text.length > max ? `${text.slice(0, max)}...` : text
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
      <div className="grid grid-cols-3 gap-4">
        {
          tasks.length === 0 
          ? <div>NO TASK ADDED</div>
          : tasks.map(task => (
            <div key={task._id} className="bg-white p-5 rounded-md">
              <div className="flex items-center justify-between mb-2">
                <div className={`flex items-center gap-1 ${task.PriorityLevel === "Normal" ? "text-green-500" : task.PriorityLevel === "Medium" ? "text-orange-500" : "text-red-500"}`}>
                  {task.PriorityLevel === "Normal" ? <ChevronUp size={20}/> : task.PriorityLevel === "Medium" ? <ChevronsUp size={20}/> : <ArrowUpWideNarrow size={20}/>}
                  <span>{`${task.PriorityLevel} Priority`}</span>
                </div>
                <DotBtn 
                  onModalOpen={(id) => {
                    setSelectedTaskId(id)
                    setIsModalOpen(true)
                  }}
                  taskId={task._id}
                />
              </div>
              <div className="flex items-center gap-1 mb-0.5">
                <Circle size={15} className={`rounded-full ${task.Stage === "ToDo" ? "bg-blue-500 text-blue-500" : task.Stage === "In-Progress" ? "bg-orange-500 text-orange-500" : "bg-green-500 text-green-500 "}`}/>
                <span>{truncate(task.Title, 25)}</span>
              </div>
              <p className="text-sm text-gray-400">{formatDate(task.Date)}</p>
              <hr className="my-2 text-gray-400"/>
              
              {/* Display Assigned Users */}
              <div className="flex items-center justify-end gap-1">
                {task.AssignedTo && task.AssignedTo.length > 0 ? (
                  <>
                    {task.AssignedTo.slice(0, 3).map((user, index) => (
                      <div 
                        key={user._id || index}
                        className="size-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold"
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
              
              <hr className="my-2 text-gray-400"/>
              <span className="text-gray-400">{subTask}</span>
              <button className="flex items-center text-gray-400 gap-2 mt-2">
                <Plus size={18}/>
                <span className="text-sm">ADD SUBTASK</span>
              </button>
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