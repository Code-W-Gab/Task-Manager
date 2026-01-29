import api from "../api/axios";

// Add Sub-Task
export const addSubTask = (id, title, date, tag) => api.post(`/task/${id}/subtasks`, {
  Title: title,
  Date: date,
  Tag: tag
})