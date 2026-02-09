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
        toast.error("Failed to delete user")
        console.log(err)
      })
  }

  return(
    <div className="overflow-x-auto">
      <div className="bg-white p-2 rounded-sm mt-5 min-w-[800px]">
        {/* Table Header */}
        <div className="grid grid-cols-[repeat(4,2fr)_repeat(2,1fr)] mb-2 font-semibold text-sm lg:text-base">
          <p>Full Name</p>
          <p>Title</p>
          <p>Email</p>
          <p>Role</p>
          <p>Active</p>
          <p>Actions</p>
        </div>
        
        {/* Divider */}
        <hr className="text-gray-300 mb-4"/>

        {/* User Rows */}
        {users.length === 0 ? (
          <div className="text-center py-4 text-gray-500">No users available</div>
        ) : (
          users.map(user => (
            <div key={user._id} className="grid items-center grid-cols-[repeat(4,2fr)_repeat(2,1fr)] mb-2 pb-2 border-b border-gray-300 text-gray-500 text-sm">
              {/* Full Name */}
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  {getInitials(user.FullName)}
                </div>
                <span className="truncate">{user.FullName}</span>
              </div>
              
              {/* Title */}
              <p className="truncate pr-2">{user.Title}</p>
              
              {/* Email */}
              <p className="truncate pr-2">{user.Email}</p>
              
              {/* Role */}
              <p className="whitespace-nowrap">{user.Role}</p>
              
              {/* Active Status */}
              <span>
                <p className={`${user.Active === "Active" ? "bg-blue-300" : "bg-orange-300"} inline rounded-2xl px-4 py-1 text-gray-500 text-xs whitespace-nowrap`}>
                  {user.Active}
                </p>
              </span>
              
              {/* Actions */}
              <div className="flex gap-4">
                <button 
                  className="text-green-500 text-sm hover:text-green-600 transition-colors whitespace-nowrap"
                  onClick={() => {
                    setIsEditModalOpen(true)
                    setSelectedUserId(user._id)
                  }}
                >
                  Edit
                </button>
                <button 
                  className="text-red-500 text-sm hover:text-red-600 transition-colors whitespace-nowrap" 
                  onClick={() => {
                    setIsModalOpen(true)
                    setSelectedUserId(user._id)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
        
        {/* Delete Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center z-50">
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
          <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center z-50">
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
    </div>
  )
}