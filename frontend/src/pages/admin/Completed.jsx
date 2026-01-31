import Navigation from "../../components/common/Navigation"
import AdminCompleted from "../../components/admin/completed/adminCompleted"
import { getAllTask } from "../../services/taskService"
import { useEffect, useState } from "react"

export default function Completed() {
  const [completedTasks, setCompletedTasks] = useState([])

  const fetchCompletedTasks = () => {
    getAllTask()
      .then(res => {
        const completed = res.data.filter(task => task.Stage === "Completed")
        setCompletedTasks(completed)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchCompletedTasks()
  }, [])

  console.log(completedTasks)

  return (
    <Navigation>
      <AdminCompleted completedTasks={completedTasks} fetchCompletedTasks={fetchCompletedTasks}/>
    </Navigation>
  )
}