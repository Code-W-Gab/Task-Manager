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

// Delete Task 
export const deleteTask = (id) => api.delete(`task/${id}`)

// Get Single Task By Id
export const getTaskById = (id) => api.get(`/task/${id}`)

// Update Task
export const updateTask = (id, title, stage, date, priorityLevel, assignedTo) => api.put(`/task/${id}`,  {
  Title: title, 
  Stage: stage,
  Date: date,
  PriorityLevel: priorityLevel,
  AssignedTo: assignedTo
})