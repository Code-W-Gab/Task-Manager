import UserView from "../status/UserView";
import LoadingSpinner from "../../common/LoadingSpinner";

export default function UserTodo({ todoTasks, fetchTodoTask, loading }) {
  
  if (loading) {
    return <LoadingSpinner />;
  }
  return(
    <UserView Title={"To do Task"} tasks={todoTasks} fetchTodoTask={fetchTodoTask}/>
  )
}