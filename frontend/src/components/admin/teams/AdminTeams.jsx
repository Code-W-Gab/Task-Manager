import { Plus } from "lucide-react";
import TeamListView from "./TeamListView";

export default function AdminTeams({ onAddNewUser, users }) {
  return(
    <div className="bg-gray-200 h-full rounded-sm p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Team Members</h1>
        <button 
        onClick={onAddNewUser}
        className="flex text-white items-center gap-1 bg-green-400 px-2 py-1.5 rounded-md hover:bg-green-500 transition-colors">
          <Plus size={20}/>
          <span>Add New User</span>
        </button>
      </div>
      <TeamListView users={users}/>
    </div>
  )
}