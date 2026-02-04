import Task from "../../models/TaskSchema.mjs";

// Add subtask to a task
export const addSubTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const { Title, Date, Tag } = req.body

    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    task.SubTasks.push({ Title, Date, Tag })
    await task.save()

    res.status(201).json({ message: 'SubTask added successfully', task })
  } catch (error) {
    next(error)
  }
}

// Update subtask
export const updateSubTask = async (req, res, next) => {
  try {
    const { id, subTaskId } = req.params
    const { Title, Date, Tag, Completed } = req.body

    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    const subTask = task.SubTasks.id(subTaskId)
    if (!subTask) {
      return res.status(404).json({ message: 'SubTask not found' })
    }

    if (Title !== undefined) subTask.Title = Title
    if (Date !== undefined) subTask.Date = Date
    if (Tag !== undefined) subTask.Tag = Tag
    if (Completed !== undefined) subTask.Completed = Completed

    await task.save()
    res.status(200).json({ message: 'SubTask updated successfully', task })
  } catch (error) {
    next(error)
  }
}

// Delete subtask
export const deleteSubTask = async (req, res, next) => {
  try {
    const { id, subTaskId } = req.params

    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    task.SubTasks.pull(subTaskId)
    await task.save()

    res.status(200).json({ message: 'SubTask deleted successfully', task })
  } catch (error) {
    next(error)
  }
}