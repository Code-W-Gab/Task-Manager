import Logout from "./Logout"
import MobileMenuButton from "./MobileMenuButton"
import { getCurrentUser } from "../../services/authService"
import { useEffect, useState } from "react"

export default function Header({ onMenuClick }) {
  const [fullName, setFullName] = useState("")

  function getCurrentUserInitial() {
    getCurrentUser()
      .then(res => {
        setFullName(res.data.fullName)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getCurrentUserInitial()
  }, [])

  return(
    <div className="w-full flex justify-end max-lg:justify-between items-center px-4 py-2 border-b border-gray-200 bg-white">
      <MobileMenuButton isOpen={false} onClick={onMenuClick} />
      <span><Logout fullName={fullName}/></span>
    </div>
  )
}