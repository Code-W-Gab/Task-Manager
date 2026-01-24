import { useState } from "react"
import { LayoutDashboard, List } from "lucide-react"
import BoardView from "./BoardView"
import ListView from "./ListView"

export default function AdminView({ Title, tasks, fetchCompletedTasks, fetchInProgressTask, fetchTodoTask }) {
  const [activeView, setActiveView] = useState("board")

  return (
    <div className="bg-gray-200 rounded-sm p-5">
      <h1 className="text-xl font-bold mb-6">{Title}</h1>
      <div className="flex gap-4 items-center mb-4">
        <button 
          onClick={() => setActiveView("board")}
          className={`flex items-center gap-2 bg-white p-2 rounded-md ${activeView === "board" ? "border-b-4 border-green-500" : ""}`}
        >
          <LayoutDashboard size={15} />
          <span>Board View</span>
        </button>
        <button 
          onClick={() => setActiveView("list")}
          className={`flex items-center gap-2 bg-white p-2 rounded-md ${activeView === "list" ? "border-b-4 border-green-500" : ""}`}
        >
          <List size={15} />
          <span>List View</span>
        </button>
      </div>
      
      {
        activeView === "board" 
        ? <BoardView 
          tasks={tasks} 
          fetchCompletedTasks={fetchCompletedTasks}
          fetchInProgressTask={fetchInProgressTask}
          fetchTodoTask={fetchTodoTask}
        /> 
        : <ListView 
          tasks={tasks} 
          fetchCompletedTasks={fetchCompletedTasks}
          fetchInProgressTask={fetchInProgressTask}
          fetchTodoTask={fetchTodoTask}
        />
      }
    </div>
  )
}