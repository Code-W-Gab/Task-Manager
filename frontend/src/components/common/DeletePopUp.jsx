export default function DeletePopUp({setIsModalOpen, onDelete}) {
  
  return(
    <div className="bg-white w-145 rounded-lg p-6">
      <div>
        <h1 className="text-lg font-bold mb-3">Delete Task?</h1>
        <p>This action cannot be undone. This will permanently delete the item from your account.</p>
      </div>
      <div className="flex gap-4 mt-4 justify-end">
        <button className="font-semibold" onClick={() => setIsModalOpen(false)}>Cancel</button>
        <button className="bg-red-600 text-white px-4 py-1.5 rounded-md" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}