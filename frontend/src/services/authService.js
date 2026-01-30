import api from "../api/axios";

export const Login = (email, password) => api.post('/user/login', {
  Email: email,
  Password: password
})