import UserView from "../status/UserView";
import LoadingSpinner from "../../common/LoadingSpinner";

export default function UserInProgress({inProgressTask, fetchInProgressTask, loading}) {

  if (loading) {
    return <LoadingSpinner />;
  }
  return(
    <UserView Title={"In Progress Task"} tasks={inProgressTask} fetchInProgressTask={fetchInProgressTask}/>
  )
}