import { useEffect, useState } from "react"
import AdminInProgress from "../../components/admin/In-Progress/adminInProgress"
import LoadingSpinner from "../../components/common/LoadingSpinner"
import Navigation from "../../components/common/Navigation"
import { getAllTask } from "../../services/taskService"

export default function InProgress() {
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [loading, setLoading] = useState(true)

  function fetchInProgressTask() {
    setLoading(true)
    getAllTask()
      .then(res => {
        const InProgress = res.data.filter(task => task.Stage === "In-Progress")
        setInProgressTasks(InProgress)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }

  useEffect(() => {
    fetchInProgressTask()
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
      <AdminInProgress inProgressTasks={inProgressTasks} fetchInProgressTask={fetchInProgressTask}/>
    </Navigation>
  )
}