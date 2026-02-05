import { useEffect, useState } from "react";
import UserNavigation from "../../components/common/UserNavigation";
import UserTodo from "../../components/user/todo/userTodo";
import { getMyTask } from "../../services/userTaskService";

export default function UserTodoPage() {
  const [todoTasks, setTodoTasks] = useState([])

  const fetchTodoTask = () => {
    getMyTask()
      .then(res => {
        const todo = res.data.filter(task => task.Stage === "ToDo")
        setTodoTasks(todo)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTodoTask()
  }, [])

  return(
    <UserNavigation>
      <UserTodo todoTasks={todoTasks}/>
    </UserNavigation>
  )
}