import { Plus, LayoutDashboard, List } from "lucide-react"
import { useState } from "react"
import TasksBoardView from "./TasksBoardView"
import TasksListView from "./TasksListView"

export default function AdminTask({ onCreateTask, tasks }) {
  const [activeView, setActiveView] = useState("board") // Default

  return(
    <div className="bg-gray-200 min-h-screen rounded-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Tasks</h1>
        <button 
          onClick={onCreateTask}
          className="flex text-white items-center gap-1 bg-green-400 px-2 py-1.5 rounded-md hover:bg-green-500 transition-colors"
        >
          <Plus size={20}/>
          <span>Create Task</span>
        </button>
      </div>
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
      ? <TasksBoardView tasks={tasks}/> 
      : <TasksListView tasks={tasks}/>}
    </div>
  )
}