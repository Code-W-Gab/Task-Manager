import { useState } from "react"
import { getInitials } from "../../../utils/userLogo"
import DeletePopUp from "../../common/DeletePopUp"
import { deleteUser } from "../../../services/teamService"
import toast from "react-hot-toast"
import EditUser from "./EditUser"

export default function TeamListView({ users, FetchUser }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState(null)

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(res => {
        console.log(res)
        setIsModalOpen(false)
        FetchUser()
        toast.success("User Successfully Deleted!")
      })
      .catch(err => {
        toast.error("Failed to delete task")
        console.log(err)
      })
  }

  return(
    <div className="bg-white p-2 rounded-sm mt-5">
      <div className="grid grid-cols-[repeat(3,2fr)_repeat(3,1fr)] mb-2">
        <p>Full Name</p>
        <p>Title</p>
        <p>Email</p>
        <p>Role</p>
        <p>Active</p>
        <p>Actions</p>
      </div>
      {/* Divider */}
      <hr className="text-gray-300 mb-4"/>

      { 
      users.map(user => (
        <div key={user._id} className="grid items-center grid-cols-[repeat(3,2fr)_repeat(3,1fr)] mb-2 pb-1 border-b border-gray-300 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">
              {getInitials(user.FullName)}
            </div>
            <span>{user.FullName}</span>
          </div>
          <p>{user.Title}</p>
          <p>{user.Email}</p>
          <p>{user.Role}</p>
          <p className={`${user.Active === "Active" ? "text-blue-600" : "text-orange-600" } font-bold`}>{user.Active}</p>
          <div className="flex gap-4">
            <button 
              className="text-green-500 text-sm"
              onClick={() => {
                setIsEditModalOpen(true)
                setSelectedUserId(user._id)
              }}
            >
              Edit
            </button>
            <button 
              className="text-red-500 text-sm" 
              onClick={() => {
                setIsModalOpen(true)
                setSelectedUserId(user._id)
              }}>
                Delete
            </button>
          </div>
        </div>
      ))
      }
      
      {/* Delete Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center ">
          <div className="bg-opacity-25">
            <DeletePopUp
              title={"User"}
              setIsModalOpen={setIsModalOpen}
              onDelete={() => handleDeleteUser(selectedUserId)}
            />
          </div>
        </div>
      )}
      
      {/* Update Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center ">
          <div className="bg-opacity-25">
            <EditUser
              FetchUser={FetchUser}
              onClose={() => setIsEditModalOpen(false)}
              id={selectedUserId}
            />
          </div>
        </div>
      )}

    </div>
  )
}