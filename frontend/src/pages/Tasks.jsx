import { useState } from "react"
import AdminTask from "../components/admin/tasks/AdminTask"
import Navigation from "../components/common/Navigation"
import AddTask from "../components/admin/tasks/AddTask"

export default function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Navigation>
      <AdminTask onCreateTask={() => setIsModalOpen(true)} />
      
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 flex bg-gray-800/50 items-center justify-center ">
          <div className="bg-opacity-25">
            <AddTask onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </Navigation>
  )
}