import AdminView from "../status/AdminView"

export default function AdminInProgress({ inProgressTasks }) {
  return(
    <AdminView
      Title="In Progress"
      tasks={inProgressTasks}
    />
  )
}