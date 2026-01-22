import AdminView from "../status/AdminView"

export default function AdminCompleted({ completedTasks }) {
  return (
    <AdminView 
      Title="Completed Tasks" 
      tasks={completedTasks}
    />
  )
}