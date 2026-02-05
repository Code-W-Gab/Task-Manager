import { useEffect, useState } from "react";
import UserNavigation from "../../components/common/UserNavigation";
import UserInProgress from "../../components/user/In-Progress/userInProgress";
import { getMyTask } from "../../services/userTaskService";

export default function UserInProgressPage() {
  const [inProgressTask, setInProgressTask] = useState([])

  const fetchInProgressTask = () => {
    getMyTask()
      .then(res => {
        const InProgress = res.data.filter(task => task.Stage === "In-Progress")
        setInProgressTask(InProgress)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchInProgressTask()
  }, [])

  return(
    <UserNavigation>
      <UserInProgress inProgressTask={inProgressTask}/>
    </UserNavigation>
  )
}