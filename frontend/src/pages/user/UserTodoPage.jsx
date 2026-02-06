import { useEffect, useState } from "react";
import UserNavigation from "../../components/common/UserNavigation";
import UserTodo from "../../components/user/todo/userTodo";
import { getMyTask } from "../../services/userTaskService";

export default function UserTodoPage() {
  const [todoTasks, setTodoTasks] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchTodoTask = () => {
    setLoading(true)
    getMyTask()
      .then(res => {
        const todo = res.data.filter(task => task.Stage === "ToDo")
        setTodoTasks(todo)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
    })
  }

  useEffect(() => {
    fetchTodoTask()
  }, [])

  return(
    <UserNavigation>
      <UserTodo todoTasks={todoTasks} fetchTodoTask={fetchTodoTask} loading={loading}/>
    </UserNavigation>
  )
}