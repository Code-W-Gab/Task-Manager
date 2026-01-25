import { useEffect, useState } from "react"
import { getUserById, updateUser } from "../../../services/teamService"
import toast from 'react-hot-toast'

export default function EditUser({ id, onClose, FetchUser }) {
  const [fullName, setFullName] = useState("")
  const [title, setTitle] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    getUserById(id)
      .then(res => {
        setFullName(res.data.FullName)
        setTitle(res.data.Title)
        setEmail(res.data.Email)
        setRole(res.data.Role)
        setStatus(res.data.Active)
      })
      .catch(err => {
        toast.error("Failed to fetch user.")
        console.log(err)
      })
  }, [id])

  function handleUpdateUser(e) {
    e.preventDefault()
    if (!fullName.trim() || !title.trim() || !role.trim() || !email.trim()) {
      toast.error("Content cannot be empty.")
      return
    }

    updateUser(id, fullName, title, email, role, status)
      .then(res => {
        toast.success("User successfully updated!")
        console.log(res)
        onClose()
        FetchUser()
      })
      .catch(err => {
        toast.error("Failed to update user.")
        console.log(err)
      })
  }

  return(
    <div className="bg-white w-90 p-4 rounded-md text-gray-600">
      <h1 className="text-black text-md mb-2 font-bold">EDIT USER</h1>
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
      <div  className="flex flex-col mb-2">
        <label>Status</label>
        <select 
          className="border px-2 py-1.5 rounded-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Disable">Disable</option>
        </select>
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
          onClick={handleUpdateUser}
          className="bg-green-500 px-4 py-1 rounded-sm text-white hover:bg-green-600 transition-colors"
        > 
          Submit
        </button>
      </div>
    </div>
  )
}