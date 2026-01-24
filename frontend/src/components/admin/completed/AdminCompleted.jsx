import AdminView from "../status/AdminView"

export default function AdminCompleted({ completedTasks, fetchCompletedTasks }) {
  return (
    <AdminView 
      Title="Completed Tasks" 
      tasks={completedTasks}
      fetchCompletedTasks={fetchCompletedTasks}
    />
  )
}