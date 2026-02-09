import TaskList from "./TaskList";
import TeamList from "./TeamList";
import Tracker from "./Tracker";

export default function AdminDashboard() {
  return(
    <div className="bg-gray-200 sm:h-full  rounded-sm p-5">
      <Tracker/>
      <div className="grid grid-cols-[2fr_1.1fr] max-lg:flex max-lg:flex-col gap-4 max-lg:gap-0">
        <div>
          <TaskList/>
        </div>
        <div>
          <TeamList/>
        </div>
      </div>
    </div>
  )
}