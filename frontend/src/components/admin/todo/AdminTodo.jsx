import AdminView from "../status/AdminView";

export default function AdminTodo({ todoTasks }) {
  return(
    <AdminView Title="To Do Tasks" tasks={todoTasks}/>
  )
}