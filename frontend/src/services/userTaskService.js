import api from "../api/axios"

export const getMyTask = () => api.get('/user/task/my-tasks')