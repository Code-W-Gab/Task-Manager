import ListView from "../status/ListView"

export default function TasksListView({ tasks, fetchTasks }) {
  return(
    <ListView tasks={tasks} fetchTasks={fetchTasks}/>
  )
}