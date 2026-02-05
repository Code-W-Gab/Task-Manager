import UserView from "../status/UserView";

export default function UserTodo({ todoTasks }) {
  return(
    <UserView Title={"To do Task"} tasks={todoTasks}/>
  )
}