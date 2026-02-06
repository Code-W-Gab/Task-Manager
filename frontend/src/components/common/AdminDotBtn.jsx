import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  Plus,
  Ellipsis,
  Pencil,
  Trash,
} from 'lucide-react'

export default function AdminDotBtn({ onSubTaskModalOpen, onEditModalOpen, onDeleteModalOpen, taskId }) {
  return (
    <div>
      <Menu>
        <MenuButton>
          <Ellipsis/>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-35 bg-gray-300 rounded-md"
        >
          <MenuItem>
            <button 
              onClick={() => onEditModalOpen()}
              className="group flex w-full items-center gap-2 px-3 py-1.5 hover:bg-gray-500 hover:text-white"
            >
              <Pencil className="size-4"/>
              Edit
            </button>
          </MenuItem>
          <MenuItem>
            <button 
              onClick={() => onDeleteModalOpen(taskId)}
              className="group flex w-full items-center gap-2 px-3 py-1.5 hover:bg-gray-500 hover:text-white"
            >
              <Trash className="size-4"/>
              Delete
            </button>
          </MenuItem>
          <MenuItem>
            <button 
              onClick={onSubTaskModalOpen}
              className="group flex w-full items-center gap-2 px-3 py-1.5 hover:bg-gray-500 hover:text-white text-sm"
            >
              <Plus className="size-4"/>
              Add Sub-Task
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}