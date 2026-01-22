import ListView from "../status/ListView";

export default function TodoListView({ todoTasks }) {
  return(
    <ListView tasks={todoTasks}/>
  )
}