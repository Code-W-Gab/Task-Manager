import { useState, useEffect } from "react";
import Container from "./Container";
import { ListChecks, CircleCheckBig, CalendarCheck, CirclePlus } from "lucide-react";
import { getAllTask } from "../../../services/taskService";

export default function Tracker() {
  const [taskCounts, setTaskCounts] = useState({
    total: 0,
    completed: 0,
    inProgress: 0,
    todo: 0
  });

  
  const fetchTaskCounts = async () => {
    try {
      const res = await getAllTask();
      const tasks = res.data;

      setTaskCounts({
        total: tasks.length,
        completed: tasks.filter(task => task.Stage === "Completed").length,
        inProgress: tasks.filter(task => task.Stage === "In-Progress").length,
        todo: tasks.filter(task => task.Stage === "ToDo").length
      });
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };
  
  useEffect(() => {
    fetchTaskCounts();
  }, []);

  return(
    <div className="grid grid-cols-4 gap-4">
      <Container title={"TOTAL TASK"} total={taskCounts.total} icon={<ListChecks size={20}/>} color={"bg-blue-500"}/>
      <Container title={"COMPLETED TASK"} total={taskCounts.completed} icon={<CircleCheckBig size={20}/>} color={"bg-gray-600"}/>
      <Container title={"TASK IN PROGRESS"} total={taskCounts.inProgress} icon={<CalendarCheck size={20}/>} color={"bg-amber-400"}/>
      <Container title={"TODOS"} total={taskCounts.todo} icon={<CirclePlus size={20}/>} color={"bg-pink-700"}/>
    </div>
  )
}