import { Navigate, Route, Routes } from "react-router-dom"
// Admin
import Completed from "./pages/admin/Completed"
import Dashboard from "./pages/admin/Dashboard"
import InProgress from "./pages/admin/In-Progress"
import Tasks from "./pages/admin/Tasks"
import Team from "./pages/admin/Team"
import ToDo from "./pages/admin/ToDo"
// User
import UserCompletedPage from "./pages/user/UserCompletedPage"
import UserInProgressPage from "./pages/user/UserInProgressPage"
import UserTodoPage from "./pages/user/UserTodoPage"
import UserTaskPage from "./pages/user/UserTaskPage"
// Auth
import Login from "./pages/auth/Login"
import PrivateRoute from "./components/common/PrivateRoute"

function App() {

  return (
    <main>
      <Routes>
        {/* Admin */}
        <Route>
          <Route path="/" element={<Navigate to='/auth/login'/>}/>
          <Route path="/admin/dashboard" element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>
          <Route path="/admin/completed/status" element={
            <PrivateRoute>
              <Completed/>
            </PrivateRoute>
          }/>
          <Route path="/admin/in-progress/status" element={
            <PrivateRoute>
              <InProgress/>
            </PrivateRoute>
          }/>
          <Route path="/admin/todo/status" element={
            <PrivateRoute>
              <ToDo/>
            </PrivateRoute>
          }/>
          <Route path="/admin/tasks" element={
            <PrivateRoute>
              <Tasks/>
            </PrivateRoute>
          }/>
          <Route path="/admin/team" element={
            <PrivateRoute>
              <Team/>
            </PrivateRoute>
          }/>
        </Route>
        {/* Auth */}
        <Route path="/auth/login" element={<Login/>}/>
        {/* User */}
        <Route>
          <Route path="/user/completed/status" element={
            <PrivateRoute>
              <UserCompletedPage/>
            </PrivateRoute>
          }/>
          <Route path="/user/in-progress/status" element={
            <PrivateRoute>
              <UserInProgressPage/>
            </PrivateRoute>
          }/>
          <Route path="/user/todo/status" element={
            <PrivateRoute>
              <UserTodoPage/>
            </PrivateRoute>
          }/>
          <Route path="/user/tasks" element={
            <PrivateRoute>
              <UserTaskPage/>
            </PrivateRoute>
          }/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
