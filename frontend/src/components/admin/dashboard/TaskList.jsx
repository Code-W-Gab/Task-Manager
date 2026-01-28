import { useEffect, useState } from "react"
import { getAllTask } from "../../../services/taskService"
import { Circle, ChevronUp, ChevronsUp, ArrowUpWideNarrow } from "lucide-react"
import { getInitials } from "../../../utils/userLogo"
import { formatDistanceToNow } from "date-fns"

export default function TaskList() {
  const truncate = (text, max = 40) => text && text.length > max ? `${text.slice(0, max)}...` : text
  const [tasks, setTasks] = useState([])

  const fetchTasks = () => {
    getAllTask()
      .then(res => setTasks(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return(
    <div className="bg-white p-2 rounded-sm mt-10">
      <div className="grid grid-cols-[2fr_repeat(3,1fr)] mb-2 font-bold text-sm">
        <p>Task Title</p>
        <p>Priority</p>
        <p>Teams</p>
        <p>Created At</p>
      </div>
      <hr className="text-gray-300"/>
      {
        tasks.map(task => (
          <div key={task._id} className="grid grid-cols-[2fr_repeat(3,1fr)] items-center mt-4 border-b border-gray-300 pb-1 text-gray-600">
            <div className="flex items-center gap-2">
              <Circle size={10} className={`rounded-full ${task.Stage === "ToDo" ? "bg-blue-500 text-blue-500" : task.Stage === "In-Progress" ? "bg-orange-500 text-orange-500" : "bg-green-500 text-green-500 "}`}/>
              <span className="text-sm">{truncate(task.Title, 40)}</span>
            </div>
            <div className={`flex items-center gap-1 ${task.PriorityLevel === "Normal" ? "text-green-500" : task.PriorityLevel === "Medium" ? "text-orange-500" : "text-red-500"}`}>
              {task.PriorityLevel === "Normal" ? <ChevronUp size={15} /> : task.PriorityLevel === "Medium" ? <ChevronsUp size={15}/> : <ArrowUpWideNarrow size={15}/>}
              <span className="text-sm">{`${task.PriorityLevel} Priority`}</span>
            </div>
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
            <p className="text-sm">{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
          </div>
        ))
      }
    </div>
  )
}