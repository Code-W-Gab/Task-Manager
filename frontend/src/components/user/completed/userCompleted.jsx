import UserView from "../status/UserView";

export default function UserCompleted({completedTasks}) {
  return(
    <UserView Title={"Completed Task"} tasks={completedTasks}/>
  )
}