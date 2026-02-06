import { useEffect, useState } from "react"
import UserNavigation from "../../components/common/UserNavigation"
import UserCompleted from "../../components/user/completed/userCompleted"
import { getMyTask } from "../../services/userTaskService"

export default function UserCompletedPage() {
  const [completedTasks, setCompletedTasks] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchCompletedTasks = () => {
    setLoading(true)
    getMyTask()
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

  return(
    <UserNavigation>
      <UserCompleted completedTasks={completedTasks} fetchCompletedTasks={fetchCompletedTasks} loading={loading}/>
    </UserNavigation>
  )
}