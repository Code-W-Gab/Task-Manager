import { CircleUser } from "lucide-react"

export default function Header() {
  return(
    <div className="w-full flex justify-between px-4 py-3">
      <input 
      type="text"
      placeholder="Search"
      className="px-3 py-1 w-70 border rounded-md"/>
      <CircleUser />
    </div>
  )
}