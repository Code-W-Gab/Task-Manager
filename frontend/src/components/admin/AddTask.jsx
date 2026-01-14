export default function AddTask() {
  return(
    <div>
      <div className="bg-amber-400 w-90 p-4">
        <h1>ADD TASK</h1>
        <div className="flex flex-col">
          <label htmlFor="Title">Task Title</label>
          <input 
          type="text" 
          placeholder="Task Title"
          className="border" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Title">Assign Task To:</label>
          <input 
          type="text" 
          placeholder="Task Title"
          className="border" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label>Task Stage</label>
            <input 
            type="text"
            className="border" />
          </div>
          <div className="flex flex-col">
            <label>Task Date</label>
            <input 
            type="date"
            className="border" />
          </div>
        </div>
      </div>
    </div>
  )
}