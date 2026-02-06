import api from "../api/axios"

export const getMyTask = () => api.get('/user/task/my-tasks')

export const getMyTaskById = (id) => api.get(`/user/task/${id}`)

export const updateTask = (id, stage) => api.put(`/user/task/${id}`, {
  Stage: stage
})

export const deleteTask = (id) => api.delete(`/user/task/${id}`)