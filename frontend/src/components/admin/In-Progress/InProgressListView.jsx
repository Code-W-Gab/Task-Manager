import ListView from "../status/ListView"

export default function InProgressListView({ inProgressTasks }) {
  return(
    <ListView tasks={inProgressTasks}/>
  )
}