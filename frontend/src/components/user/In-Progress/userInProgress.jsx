import UserView from "../status/UserView";

export default function UserInProgress({inProgressTask}) {
  return(
    <UserView Title={"In Progress Task"} tasks={inProgressTask}/>
  )
}