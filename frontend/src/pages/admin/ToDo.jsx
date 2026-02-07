import { useEffect, useState } from "react";
import AdminTodo from '../../components/admin/todo/AdminTodo'
import Navigation from "../../components/common/Navigation";
import { getAllTask } from "../../services/taskService";
import LoadingSpinner from "../../components/common/LoadingSpinner";

export default function ToDo() {
  const [todoTasks, setTodoTasks] = useState([])
  const [loading, setLoading] = useState(true)

  function fetchTodoTask() {
    setLoading(true)
    getAllTask()
      .then(res => {
        const todo = res.data.filter(task => task.Stage === "ToDo")
        setTodoTasks(todo)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }

  useEffect(() => {
    fetchTodoTask()
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
      <AdminTodo todoTasks={todoTasks} fetchTodoTask={fetchTodoTask}/>
    </Navigation>
  )
}