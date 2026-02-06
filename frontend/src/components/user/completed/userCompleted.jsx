import UserView from "../status/UserView";
import LoadingSpinner from "../../common/LoadingSpinner";

export default function UserCompleted({completedTasks, fetchCompletedTasks, loading}) {

  if (loading) {
    return <LoadingSpinner />;
  }

  return(
    <UserView Title={"Completed Task"} tasks={completedTasks} fetchCompletedTasks={fetchCompletedTasks}/>
  )
}