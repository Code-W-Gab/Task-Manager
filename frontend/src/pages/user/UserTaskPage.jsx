import UserNavigation from "../../components/common/UserNavigation";
import UserTask from "../../components/user/tasks/userTask";
import { useState, useEffect } from "react";
import {getMyTask} from '../../services/userTaskService'

export default function UserTaskPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyTasks = () => {
    setLoading(true);
    getMyTask()
      .then(res => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMyTasks();
  }, []);

  return(
    <UserNavigation>
      <UserTask tasks={tasks} fetchMyTasks={fetchMyTasks} loading={loading}/>
    </UserNavigation>
  )
}