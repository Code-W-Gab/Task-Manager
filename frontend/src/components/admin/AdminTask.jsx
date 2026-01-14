import { Plus, LayoutDashboard, List } from "lucide-react"

export default function AdminTask() {
  return(
    <div className="bg-gray-200 h-full rounded-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Tasks</h1>
        <div className="flex items-center gap-1 bg-green-400 px-2 py-1.5 rounded-md">
          <Plus size={20}/>
          <span>Create Task</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        {/* Board view */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-md">
          <LayoutDashboard size={15} />
          <span>Board View</span>
        </div>
        {/* List view */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-md">
          <List size={15}/>
          <span>List View</span>
        </div>
      </div>
    </div>
  )
}