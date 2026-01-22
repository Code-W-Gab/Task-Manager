import BoardView from "../status/BoardView";

export default function TodoBoardView({ todoTasks }) {
  return(
    <BoardView tasks={todoTasks}/>
  )
}