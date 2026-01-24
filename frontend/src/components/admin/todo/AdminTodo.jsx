import AdminView from "../status/AdminView";

export default function AdminTodo({ todoTasks, fetchTodoTask }) {
  return(
    <AdminView Title="To Do Tasks" tasks={todoTasks} fetchTodoTask={fetchTodoTask}/>
  )
}