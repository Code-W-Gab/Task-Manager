import api from "../api/axios"

// Create a new user
export const createUser = (fullName, title, email, password, role ) => api.post('/admin/team/create', { 
  FullName: fullName, 
  Title: title, 
  Email: email, 
  Password: password,
  Role: role 
})

// Get All user
export const getAllUser = () => api.get('/admin/team/getAll')

// Delete user
export const deleteUser = (id) => api.delete(`/admin/team/${id}`)

// Update user
export const updateUser = (id, fullName, title, email, role, status) => api.put(`/admin/team/${id}`, {
  FullName: fullName,
  Title: title,
  Email: email,
  Role: role,
  Active: status
})

// Get user by Id
export const getUserById = (id) => api.get(`/admin/team/${id}`)