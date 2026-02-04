import { useState, useEffect } from "react";
import UserView from "../status/UserView";
import { getMyTask } from "../../../services/userTaskService";
import LoadingSpinner from "../../common/LoadingSpinner";

export default function UserTask() {
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

  if (loading) {
    return <LoadingSpinner />;
  }

  return <UserView Title={"My Tasks"} tasks={tasks} fetchTasks={fetchMyTasks} />;
}