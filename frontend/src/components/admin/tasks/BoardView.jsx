import { useState } from "react"
import { ChevronUp, ChevronsUp, ArrowUpWideNarrow, Circle, Ellipsis, Plus } from "lucide-react"

export default function BoardView() {
  const [title, setTitle] = useState("Website Task")
  const [users, setUsers] = useState([])
  const [stage, setStage] = useState("Completed")
  const [date, setDate] = useState("2026-01-06")
  const [priorityLevel, setPriorityLevel] = useState("High")
  const [subTask, setSubTask] = useState("No Sub-Task")

  return(
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-5 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <div className={`flex items-center gap-1 ${priorityLevel === "Normal" ? "text-green-500" : priorityLevel === "Medium" ? "text-orange-500" : "text-red-500"}`}>
            {priorityLevel === "Normal" ? <ChevronUp size={20}/> : priorityLevel === "Medium" ? <ChevronsUp size={20}/> : <ArrowUpWideNarrow size={20}/>}
            <span>{`${priorityLevel} Priority`}</span>
          </div>
          <Ellipsis size={20} />
        </div>
        <div className="flex items-center gap-1 mb-0.5">
          <Circle size={15} className={`rounded-full ${stage === "ToDo" ? "bg-blue-500 text-blue-500" : stage === "In-Progress" ? "bg-orange-500 text-orange-500" : "bg-green-500 text-green-500 "}`}/>
          <span>{title}</span>
        </div>
        <p className="text-sm text-gray-400">{date}</p>
        <hr className="my-2 text-gray-400"/>
        <span className="text-gray-400">{subTask}</span>
        <button className="flex items-center text-gray-400 gap-2 mt-2">
          <Plus size={18}/>
          <span className="text-sm">ADD SUBTASK</span>
        </button>
      </div>
    </div>
  )
}