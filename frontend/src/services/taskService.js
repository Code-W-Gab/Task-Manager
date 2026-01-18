import api from "../api/axios"
// Create a new task
export function createTask(Title, AssignedTo, Stage, Date, PriorityLevel) {
  return api.post("/task/create", {
    Title,
    AssignedTo,
    Stage,
    Date,
    PriorityLevel
  })
}
// Get All Tasks
export const getAllTask = () => api.get('/task/all')