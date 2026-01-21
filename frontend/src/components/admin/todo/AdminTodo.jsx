import { LayoutDashboard, List } from "lucide-react"
import { useState } from "react"
import TodoBoardView from "./TodoBoardView"
import TodoListView from "./TodoListView"

export default function AdminTodo({ todoTasks }) {
  const [activeView, setActiveView] = useState("board") // Default

  return(
    <div className="bg-gray-200 h-full rounded-sm p-5">
      <h1 className="text-xl font-bold mb-6">In Progress Tasks</h1>
      <div className="flex gap-4 items-center mb-4">
        {/* Board view */}
        <button 
        onClick={() => setActiveView("board")}
        className={`flex items-center gap-2 bg-white p-2 rounded-md ${activeView === "board" ? "border-b-4 border-green-500" : ""}`}>
          <LayoutDashboard size={15} />
          <span>Board View</span>
        </button>
        {/* List view */}
        <button 
        onClick={() => setActiveView("list")}
        className={`flex items-center gap-2 bg-white p-2 rounded-md ${activeView === "list" ? "border-b-4 border-green-500" : ""}`}>
          <List size={15}/>
          <span>List View</span>
        </button>
      </div>
      
      {/* Conditional Rendering */}
      {activeView === "board" 
      ? <TodoBoardView todoTasks={todoTasks}/>
      : <TodoListView todoTasks={todoTasks}/>}
    </div>
  )
}