import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CircleUser, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate()
  
  function handleLogout() {
    // Remove token or user info from localStorage/sessionStorage
    localStorage.removeItem("token"); // adjust key as needed
    // Redirect and replace history
    navigate("/", { replace: true });
  }

  return(
    <div>
      <Menu>
        <MenuButton>
          <CircleUser/>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-30 bg-gray-300 rounded-md"
        >
          <MenuItem>
            <button 
              onClick={handleLogout}
              className="group flex w-full items-center gap-2 px-3 py-1.5 hover:bg-gray-500 hover:text-white"
            >
              <LogOut size={15}/>
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}