import Logout from "./Logout"
import { getCurrentUser } from "../../services/authService"
import { useEffect, useState } from "react"

export default function Header() {
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
    <div className="w-full flex justify-end px-4 py-2">
      <span><Logout fullName={fullName}/></span>
    </div>
  )
}