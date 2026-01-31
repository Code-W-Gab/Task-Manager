import { useState } from "react"
import { Login } from "../../services/authService"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    
    if (!email.trim() || !password.trim()) {
      toast.error("Credential cannot be empty!")
      return
    }

    Login(email, password)
      .then(res => {
        // Save token
        localStorage.setItem("token", res.data.token);
        setEmail("")
        setPassword("")
        toast.success("Successfully Login!")
        console.log(res.data.role)
        if (res.data.role !== "admin") return navigate('/user/dashboard')
        navigate('/admin/dashboard')
      })
      .catch(err => {
        console.log(err)
        toast.error("Invalid Credential.")
      })
  }
  
  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white px-6 py-8 w-90 rounded-md">
        <h1 className="text-center text-3xl text-green-400 ">Welcome Back!</h1>
        <p className="text-center text-sm text-gray-500 mt-1 mb-6">keep all your credentials safe!</p>
        <div className="flex flex-col mb-3">
          <label>Email Address</label>
          <input 
          type="email" 
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1.5 rounded-sm mt-1" />
        </div>
        <div className="flex flex-col mb-2">
          <label>Password</label>
          <input 
          type="password" 
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-1.5 rounded-sm mt-1" />
        </div>
        <button className="text-sm">
          Forgot Password?
        </button>
        <div>
          <button onClick={handleLogin} className="bg-green-400 w-full mt-6 py-2 rounded-md text-white">Log in</button>
        </div>
      </div>
    </div>
  )
}