import api from "../api/axios"
// Create a new task
export const createTask = (title, stage, date, priorityLevel) => api.post('/task/create', { 
  Title: title, 
  Stage: stage, 
  Date: date, 
  PriorityLevel: priorityLevel 
})