import { Navigate, Route, Routes } from "react-router-dom"
import Completed from "./pages/Completed"
import Dashboard from "./pages/Dashboard"
import InProgress from "./pages/In-Progress"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Tasks from "./pages/Tasks"
import Team from "./pages/Team"
import ToDo from "./pages/ToDo"
import Trash from "./pages/Trash"

function App() {

  return (
    <main>
      <Routes>
        <Route>
          <Route path="/" element={<Navigate to='/dashboard'/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/completed/status" element={<Completed/>}/>
          <Route path="/in-progress/status" element={<InProgress/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/to-do" element={<ToDo/>}/>
          <Route path="/trashed" element={<Trash/>}/>
        </Route>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </main>
  )
}

export default App
