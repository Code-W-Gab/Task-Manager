import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getInitials } from '../../utils/userLogo';

export default function Logout({fullName}) {
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
          <div className="size-9 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold hover:bg-blue-600 transition-colors">
            {getInitials(fullName)}
          </div>
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