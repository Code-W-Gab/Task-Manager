import { ChevronUp, ChevronsUp, ArrowUpWideNarrow, Circle, Ellipsis, Plus } from "lucide-react"
import UserDotBtn from "../../common/UserDotBtn"
import { formatDate } from "../../../utils/Date"
import { getInitials } from "../../../utils/userLogo"
import { useState } from "react"
import UserEditTask from "./UserEditTask"

export default function UserBoardView({ tasks, fetchTasks, fetchTodoTask, fetchInProgressTask, fetchCompletedTasks }) {
  const truncate = (text, max) => text && text.length > max ? `${text.slice(0, max)}...` : text
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  console.log(selectedTaskId)

  return(
    <div>
      <div className="grid grid-cols-3 gap-4">
        {
          tasks.length === 0 
          ? <div>NO TASK ADDED</div>
          : tasks.map(task => (
            <div key={task._id}>
              <div  className="bg-white p-5 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <div className={`flex items-center gap-1 ${task.PriorityLevel === "Normal" ? "text-green-500" : task.PriorityLevel === "Medium" ? "text-orange-500" : "text-red-500"}`}>
                    {task.PriorityLevel === "Normal" ? <ChevronUp size={20}/> : task.PriorityLevel === "Medium" ? <ChevronsUp size={20}/> : <ArrowUpWideNarrow size={20}/>}
                    <span>{`${task.PriorityLevel} Priority`}</span>
                  </div>
                  <UserDotBtn  
                    onOpenEditTaskModal={() => {
                      setSelectedTaskId(task._id)
                      setIsEditModalOpen(true)
                    }}
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
                {
                  task.SubTasks.map(subTask => (
                    <div key={subTask._id} className="mt-2">
                      <span className="font-semibold text-sm ">{subTask.Title}</span>
                      <div className=" text-sm flex items-center gap-8 ml-2">
                        <p className="text-gray-400">{formatDate(subTask.Date)}</p>
                        <p className="bg-blue-100 px-4 py-1 rounded-2xl text-blue-500 font-semibold text-xs">{subTask.Tag}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>

      {/* Edit Task Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center">
          <div className="bg-opacity-25">
            <UserEditTask
              onClose={() => setIsEditModalOpen(false)}
              id={selectedTaskId}
              fetchTasks={fetchTasks} 
              fetchTodoTask={fetchTodoTask} 
              fetchInProgressTask={fetchInProgressTask} 
              fetchCompletedTasks={fetchCompletedTasks}
              />
          </div>
        </div>
      )}
    </div>
  )
}