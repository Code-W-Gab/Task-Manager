import { useState } from "react"
import AdminTask from "../components/admin/AdminTask"
import Navigation from "../components/common/Navigation"
import AddTask from "../components/admin/AddTask"

export default function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Navigation>
      <AdminTask onCreateTask={() => setIsModalOpen(true)} />
      
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()}>
            <AddTask onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </Navigation>
  )
}