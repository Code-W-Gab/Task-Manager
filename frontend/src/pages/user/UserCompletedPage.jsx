import { useEffect, useState } from "react"
import UserNavigation from "../../components/common/UserNavigation"
import UserCompleted from "../../components/user/completed/userCompleted"
import { getMyTask } from "../../services/userTaskService"

export default function UserCompletedPage() {
  const [completedTasks, setCompletedTasks] = useState([])

  const fetchCompletedTasks = () => {
    getMyTask()
      .then(res => {
        const completed = res.data.filter(task => task.Stage === "Completed")
        setCompletedTasks(completed)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchCompletedTasks()
  })

  return(
    <UserNavigation>
      <UserCompleted completedTasks={completedTasks}/>
    </UserNavigation>
  )
}