import UserView from "../status/UserView";
import LoadingSpinner from "../../common/LoadingSpinner";

export default function UserTask({ tasks, fetchMyTasks, loading}) {
  
  if (loading) {
    return <LoadingSpinner />;
  }

  return <UserView Title={"My Tasks"} tasks={tasks} fetchTasks={fetchMyTasks} />;
}