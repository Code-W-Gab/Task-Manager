import { useState } from 'react'
import AdminSideBar from './AdminSideBar'
import Header from "./Header"

export default function Navigation({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSideBar 
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