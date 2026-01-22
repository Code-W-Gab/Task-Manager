import BoardView from "../status/BoardView"

export default function InProgressBoardView({ inProgressTasks }) {
  return(
    <BoardView tasks={inProgressTasks}/>
  )
}