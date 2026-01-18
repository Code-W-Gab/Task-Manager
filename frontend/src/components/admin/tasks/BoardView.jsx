import { useState } from "react"
import { ChevronUp, ChevronsUp, ArrowUpWideNarrow, Circle, Ellipsis, Plus } from "lucide-react"
import { formatDate } from "../../../utils/Date"

export default function BoardView({tasks}) {
  const [subTask, setSubTask] = useState("No Sub-Task")
  const truncate = (text, max) => text && text.length > max ? `${text.slice(0, max)}...` : text

  return(
    <div className="grid grid-cols-3 gap-4 bg-gray-200">
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
              <Ellipsis size={20} />
            </div>
            <div className="flex items-center gap-1 mb-0.5">
              <Circle size={15} className={`rounded-full ${task.Stage === "ToDo" ? "bg-blue-500 text-blue-500" : task.Stage === "In-Progress" ? "bg-orange-500 text-orange-500" : "bg-green-500 text-green-500 "}`}/>
              <span>{truncate(task.Title, 25)}</span>
            </div>
            <p className="text-sm text-gray-400">{formatDate(task.Date)}</p>
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
  )
}