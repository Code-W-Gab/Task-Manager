import BoardView from "../status/BoardView"

export default function TasksBoardView({tasks, fetchTasks}) {
  return(
    <BoardView tasks={tasks} fetchTasks={fetchTasks}/>
  )
}