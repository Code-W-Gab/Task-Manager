import { useEffect, useState } from "react";
import AdminTodo from "../components/admin/todo/AdminTodo";
import Navigation from "../components/common/Navigation";
import { getAllTask } from "../services/taskService";

export default function ToDo() {
  const [todoTasks, setTodoTasks] = useState([])

  function fetchTodoTask() {
    getAllTask()
      .then(res => {
        const todo = res.data.filter(task => task.Stage === "ToDo")
        setTodoTasks(todo)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTodoTask()
  }, [])

  return (
    <Navigation>
      <AdminTodo todoTasks={todoTasks}/>
    </Navigation>
  )
}