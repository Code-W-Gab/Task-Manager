import { CalendarCheck2, CircleCheck, CircleCheckBig, ClipboardCheck, ListChecks, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function UserSideBar({ isOpen, onClose }) {
  const location = useLocation();
  
  const navItems = [
    { to: "/user/tasks", icon: ClipboardCheck, label: "Tasks" },
    { to: "/user/completed/status", icon: CircleCheck, label: "Completed" },
    { to: "/user/in-progress/status", icon: CalendarCheck2, label: "In-Progress" },
    { to: "/user/todo/status", icon: ListChecks, label: "To-Do" },
  ];

  const handleLinkClick = () => {
    // Close sidebar on mobile when link is clicked
    if (onClose) {
      onClose()
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        p-3 h-full
      `}>
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-1 rounded-md hover:bg-gray-100"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="bg-green-500 p-2 rounded-full">
            <CircleCheckBig size={20} className="text-white"/>
          </span>
          <span className="text-xl font-bold">TuruTask</span>
        </div>

        {/* Nav Bar */}
        <div className="mt-8 flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            
            return (
              <Link 
                key={item.to}
                to={item.to}
                onClick={handleLinkClick}
                className={`flex items-center gap-2 rounded-md p-1.5 transition-colors ${
                  isActive 
                    ? "bg-green-500 text-white" 
                    : "hover:bg-green-400"
                }`}
              >
                <Icon size={20}/>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  )
}