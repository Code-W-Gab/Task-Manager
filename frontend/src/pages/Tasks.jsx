import { useState, useEffect } from "react"
import AdminTask from "../components/admin/tasks/AdminTask"
import Navigation from "../components/common/Navigation"
import AddTask from "../components/admin/tasks/AddTask"
import { getAllTask } from "../services/taskService"

export default function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tasks, setTasks] = useState([])

  const fetchTasks = () => {
    getAllTask()
      .then(res => setTasks(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <Navigation>
      <AdminTask onCreateTask={() => setIsModalOpen(true)} tasks={tasks}/>
      
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center ">
          <div className="bg-opacity-25">
            <AddTask onClose={() => setIsModalOpen(false)} fetchTasks={fetchTasks}/>
          </div>
        </div>
      )}
    </Navigation>
  )
}