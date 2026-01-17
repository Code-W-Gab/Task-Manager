import api from "../api/axios"
// Create a new task
export const createTask = (title, stage, date, priorityLevel) => api.post('/task/create', { 
  Title: title, 
  Stage: stage, 
  Date: date, 
  PriorityLevel: priorityLevel 
})
// Get All Tasks
export const getAllTask = () => api.get('/task/all')