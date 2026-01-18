import { Pencil, Trash, ChevronUp, ChevronsUp, ArrowUpWideNarrow, Circle, Ellipsis, Plus } from "lucide-react"
import { formatDate } from "../../../utils/Date"

export default function ListView({ tasks }) {
  const truncate = (text, max = 40) => text && text.length > max ? `${text.slice(0, max)}...` : text

  return(
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
          <div key={task._id} className="grid grid-cols-[4fr_2fr_repeat(3,1fr)] mt-4 border-b border-gray-300">
            <div className="flex items-center gap-2 mb-0.5">
              <Circle size={10} className={`rounded-full ${task.Stage === "ToDo" ? "bg-blue-500 text-blue-500" : task.Stage === "In-Progress" ? "bg-orange-500 text-orange-500" : "bg-green-500 text-green-500 "}`}/>
              <span className="text-sm">{truncate(task.Title, 40)}</span>
            </div>
            <div className={`flex items-center gap-1 ${task.PriorityLevel === "Normal" ? "text-green-500" : task.PriorityLevel === "Medium" ? "text-orange-500" : "text-red-500"}`}>
              {task.PriorityLevel === "Normal" ? <ChevronUp size={15} /> : task.PriorityLevel === "Medium" ? <ChevronsUp size={15}/> : <ArrowUpWideNarrow size={15}/>}
              <span className="text-sm">{`${task.PriorityLevel} Priority`}</span>
            </div>
            <p className="text-sm text-gray-400">{formatDate(task.Date)}</p>
            <span>Change this</span>
            <div className="flex gap-4">
              <button className="text-green-500 text-sm">Edit</button>
              <button className="text-red-500 text-sm">Delete</button>
            </div>
          </div>
        ))
      }

    </div>
  )
}