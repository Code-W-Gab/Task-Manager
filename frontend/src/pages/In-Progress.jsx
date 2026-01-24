import { useEffect, useState } from "react"
import AdminInProgress from "../components/admin/In-Progress/adminInProgress"
import Navigation from "../components/common/Navigation"
import { getAllTask } from "../services/taskService"

export default function InProgress() {
  const [inProgressTasks, setInProgressTasks] = useState([])

  function fetchInProgressTask() {
    getAllTask()
      .then(res => {
        const InProgress = res.data.filter(task => task.Stage === "In-Progress")
        setInProgressTasks(InProgress)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchInProgressTask()
  }, [])

  return (
    <Navigation>
      <AdminInProgress inProgressTasks={inProgressTasks} fetchInProgressTask={fetchInProgressTask}/>
    </Navigation>
  )
}