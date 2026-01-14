import { CalendarCheck2, CircleCheck, CircleCheckBig, ClipboardCheck, LayoutDashboard, ListChecks, Trash2, Users } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function SideBar() {
  const location = useLocation();
  
  const navItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/tasks", icon: ClipboardCheck, label: "Tasks" },
    { to: "/completed", icon: CircleCheck, label: "Completed" },
    { to: "/in-progress", icon: CalendarCheck2, label: "In-Progress" },
    { to: "/todo", icon: ListChecks, label: "To-Do" },
    { to: "/team", icon: Users, label: "Team" },
    { to: "/trash", icon: Trash2, label: "Trash" },
  ];

  return (
    <div className="p-3 w-70 h-full min-h-screen">
      {/* Title */}
      <div className="flex items-center gap-2 ">
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
          console.log(isActive)
          
          return (
            <Link 
              key={item.to}
              to={item.to} 
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
  )
}