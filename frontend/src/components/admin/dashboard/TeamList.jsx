import { getAllUser } from "../../../services/teamService";
import { useState, useEffect } from "react";
import { getInitials } from "../../../utils/userLogo";
import { formatDistanceToNow } from "date-fns"

export default function TeamList() {
  const [users, setUsers] = useState([]);

  function FetchUser() {
    getAllUser()
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    FetchUser()
  }, [])

  return(
    <div className="bg-white p-2 rounded-sm mt-10">
      <div className="grid grid-cols-[2fr_repeat(2,1fr)] mb-2 font-bold text-sm">
        <p>Full Name</p>
        <p>Status</p>
        <p>Created At</p>
      </div>
      {/* Divider */}
      <hr className="text-gray-300 mb-4"/>
      {
        users.map(user => (
          <div key={user.id} className="grid grid-cols-[2fr_repeat(2,1fr)] items-center mt-4 border-b border-gray-300 pb-1 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">
                {getInitials(user.FullName)}
              </div>
              <div className="flex flex-col">
                <span>{user.FullName}</span>
                <span className="text-[10px] text-black">{user.Role}</span>
              </div>
            </div>
            <span><p className={`${user.Active === "Active" ? "bg-blue-300" : "bg-orange-300"} inline rounded-2xl px-2 py-1 text-gray-500`}>{user.Active}</p></span>
            <p className="text-sm">{formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}</p>
          </div>
        ))
      }
    </div>
  )
}