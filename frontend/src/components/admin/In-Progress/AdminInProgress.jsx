import AdminView from "../status/AdminView"

export default function AdminInProgress({ inProgressTasks, fetchInProgressTask }) {
  return(
    <AdminView
      Title="In Progress"
      tasks={inProgressTasks}
      fetchInProgressTask={fetchInProgressTask}
    />
  )
}