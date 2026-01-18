import { useState } from "react"
import toast from "react-hot-toast"
import { createUser } from "../../../services/teamService"

export default function AddNewUser({ onClose, FetchUser }) {
  const [fullName, setFullName] = useState("")
  const [title, setTitle] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  function handleCreateUser(e) {
    e.preventDefault() // Prevent default form action
    
    if (!fullName.trim() || !title.trim() || !email.trim() || !role.trim()) {
      toast.error("FullName, Title, Email and Role cannot be empty!")
      return
    }

    createUser(fullName, title, email, role)
      .then(res => {
        toast.success("User Successfully Created!")
        onClose() // Close modal on success
        FetchUser()
        console.log(res)
      })
      .catch(err => {
        if (err.response?.status === 400) return toast.error("Email already exists. Please use a different email.")
      })

  }

  return(
    <div className="bg-white w-90 p-4 rounded-md text-gray-600">
      <h1 className="text-black text-md mb-2 font-bold">ADD NEW USER</h1>
      <div className="flex flex-col mb-2">
        <label>Full Name</label>
        <input 
        type="text" 
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="border px-2 py-1.5 rounded-sm" />
      </div>
      <div className="flex flex-col mb-2">
        <label>Title</label>
        <input 
        type="text" 
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-2 py-1.5 rounded-sm" />
      </div>
      <div className="flex flex-col mb-2">
        <label>Email</label>
        <input 
        type="email" 
        placeholder="email@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-2 py-1.5 rounded-sm" />
      </div>
      <div className="flex flex-col mb-2">
        <label>Role</label>
        <input 
        type="text" 
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border px-2 py-1.5 rounded-sm" />
      </div>
      {/* Buttons */}
      <div className="flex gap-2 justify-end mt-6">
        <button 
          onClick={onClose}
          className="bg-gray-300 px-4 py-1 rounded-sm text-black hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleCreateUser}
          className="bg-green-500 px-4 py-1 rounded-sm text-white hover:bg-green-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  )
}