import { Menu, X } from "lucide-react"

export default function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  )
}