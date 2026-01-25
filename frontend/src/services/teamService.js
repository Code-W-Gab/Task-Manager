import api from "../api/axios"

// Create a new user
export const createUser = (fullName, title, email, role ) => api.post('/user/create', { 
  FullName: fullName, 
  Title: title, 
  Email: email, 
  Role: role 
})

// Get All user
export const getAllUser = () => api.get('/user/getAll')

// Delete user
export const deleteUser = (id) => api.delete(`/user/${id}`)

// Update user
export const updateUser = (id, fullName, title, email, role, status) => api.put(`/user/${id}`, {
  FullName: fullName,
  Title: title,
  Email: email,
  Role: role,
  Active: status
})

// Get user by Id
export const getUserById = (id) => api.get(`/user/${id}`)