import TaskList from "./TaskList";
import TeamList from "./TeamList";
import Tracker from "./Tracker";

export default function AdminDashboard() {
  return(
    <div className="bg-gray-200 h-full rounded-sm p-5">
      <Tracker/>
      <div className="grid grid-cols-[2fr_1.1fr] gap-4">
        <TaskList/>
        <TeamList/>
      </div>
    </div>
  )
}