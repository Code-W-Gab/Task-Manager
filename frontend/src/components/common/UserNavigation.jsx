import UserSideBar from "./UserSideBar"
import Header from "./Header"
import { useState } from "react"

export default function UserNavigation({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen">
      <UserSideBar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)}/>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}