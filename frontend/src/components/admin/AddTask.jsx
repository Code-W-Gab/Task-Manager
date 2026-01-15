export default function AddTask({ onClose }) {
  return(
    <div>
      <div className="bg-amber-300 w-90 p-4 rounded-md text-gray-500">
        <h1 className="text-black text-md mb-2">ADD TASK</h1>
        <div className="flex flex-col">
          <label htmlFor="Title">Task Title</label>
          <input 
          type="text" 
          placeholder="Task Title"
          className="border px-2 py-1.5 rounded-sm" />
        </div>
        {/* Change to Dropdown  */}
        <div className="flex flex-col">
          <label htmlFor="Title">Assign Task To:</label>
          <input 
          type="text" 
          placeholder="Task Title"
          className="border px-2 py-1.5 rounded-sm" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label>Task Stage</label>
            <input 
            type="text"
            className="border px-2 py-1.5 rounded-sm" />
          </div>
          <div className="flex flex-col">
            <label>Task Date</label>
            <input 
            type="date"
            className="border px-2 py-1.5 rounded-sm" />
          </div>
        </div>
        {/* Change to Dropdown  */}
        <div className="flex flex-col">
          <label>Priority Level</label>
          <input 
          type="date"
          className="border px-2 py-1.5 rounded-sm" />
        </div>
        {/* Buttons */}
        <div className="flex gap-2 justify-end mt-4">
          <button 
            onClick={onClose}
            className="bg-white px-4 py-1 rounded-sm text-black hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button className="bg-green-500 px-4 py-1 rounded-sm text-white hover:bg-green-600 transition-colors">Submit</button>
        </div>
      </div>
    </div>
  )
}