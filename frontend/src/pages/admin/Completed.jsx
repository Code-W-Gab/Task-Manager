import Navigation from "../../components/common/Navigation"
import AdminCompleted from "../../components/admin/completed/adminCompleted"
import { getAllTask } from "../../services/taskService"
import { useEffect, useState } from "react"
import LoadingSpinner from "../../components/common/LoadingSpinner"

export default function Completed() {
  const [completedTasks, setCompletedTasks] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCompletedTasks = () => {
    setLoading(true)
    getAllTask()
      .then(res => {
        const completed = res.data.filter(task => task.Stage === "Completed")
        setCompletedTasks(completed)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }

  useEffect(() => {
    fetchCompletedTasks()
  }, [])

  if (loading) {
    return (
      <Navigation>
        <LoadingSpinner/>
      </Navigation>
    )
  }

  return (
    <Navigation>
      <AdminCompleted completedTasks={completedTasks} fetchCompletedTasks={fetchCompletedTasks}/>
    </Navigation>
  )
}