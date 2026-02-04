import Task from '../../models/TaskSchema.mjs'

// Create a new task
export const createTask = async (req, res, next) => {
  try {
    const { Title, AssignedTo, Stage, Date, PriorityLevel } = req.body
    
    const newTask = new Task({
      Title,
      AssignedTo,
      Stage,
      Date,
      PriorityLevel
    })
    
    await newTask.save()
    res.status(201).json({ message: 'Task created successfully', task: newTask })
  } catch (error) {
    next(error)
  }
}

  // Get all tasks
  export const getAllTasks = async (req, res, next) => {
    try {
      const tasks = await Task.find().populate('AssignedTo', 'FullName Email')
      res.status(200).json(tasks)
    } catch (error) {
      next(error)
    }
  }

// Get task by ID
export const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id).populate('AssignedTo', 'name email')
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }
    res.status(200).json(task)
  } catch (error) {
    next(error)
  }
}

// Update task
export const updateTask = async (req, res, next) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' })
    }
    res.status(200).json({ message: 'Task updated successfully', task: updatedTask })
  } catch (error) {
    next(error)
  }
}

// Delete task
export const deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' })
    }
    res.status(200).json({ message: 'Task deleted successfully' })
  } catch (error) {
    next(error)
  }
}