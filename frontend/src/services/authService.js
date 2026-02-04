import api from "../api/axios";

export const Login = (email, password) => api.post('/auth/login', {
  Email: email,
  Password: password
})