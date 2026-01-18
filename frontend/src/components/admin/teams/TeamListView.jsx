import { getInitials } from "../../../utils/userLogo"
export default function TeamListView({ users }) {
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
            <button className="text-green-500 text-sm">Edit</button>
            <button className="text-red-500 text-sm">Delete</button>
          </div>
        </div>
      ))
      }
    </div>
  )
}