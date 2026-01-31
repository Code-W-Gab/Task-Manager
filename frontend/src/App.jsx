import { Navigate, Route, Routes } from "react-router-dom"
// Admin
import Completed from "./pages/admin/Completed"
import Dashboard from "./pages/admin/Dashboard"
import InProgress from "./pages/admin/In-Progress"
import Tasks from "./pages/admin/Tasks"
import Team from "./pages/admin/Team"
import ToDo from "./pages/admin/ToDo"
import Trash from "./pages/admin/Trash"
// User
import UserDashboard from "./pages/user/UserDashboard"
import UserCompleted from "./pages/user/UserCompleted"
import UserInProgress from "./pages/user/UserInProgress"
import UserTodo from "./pages/user/UserTodo"
import UserTask from "./pages/user/UserTask"
// Auth
import Login from "./pages/auth/Login"

function App() {

  return (
    <main>
      <Routes>
        {/* Admin */}
        <Route>
          <Route path="/" element={<Navigate to='/auth/login'/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/completed/status" element={<Completed/>}/>
          <Route path="/admin/in-progress/status" element={<InProgress/>}/>
          <Route path="/admin/todo/status" element={<ToDo/>}/>
          <Route path="/admin/tasks" element={<Tasks/>}/>
          <Route path="/admin/team" element={<Team/>}/>
          <Route path="/admin/trash" element={<Trash/>}/>
        </Route>
        {/* Auth */}
        <Route path="/auth/login" element={<Login/>}/>
        {/* User */}
        <Route>
          <Route path="/user/dashboard" element={<UserDashboard/>}/>
          <Route path="/user/completed/status" element={<UserCompleted/>}/>
          <Route path="/user/in-progress/status" element={<UserInProgress/>}/>
          <Route path="/user/todo/status" element={<UserTodo/>}/>
          <Route path="/user/task" element={<UserTask/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
