import Task from '../../models/TaskSchema.mjs'

const userTaskController = {
  async getMyTasks (req, res, next) {
    try {
      const userId = req.user.id
      const tasks = await Task.find({ AssignedTo: userId }).populate('AssignedTo', 'FullName Email');
      res.status(200).json(tasks);
    } catch (error) {
      next(error)
    }
  },

  async getMyTaskById (req, res, next) {
    try {
      const task = await Task.findById(req.params.id)
      if (!task) return res.status(400).json({ message: "Task not found!"})
      res.status(200).json(task)
    } catch (error) {
      next(error)
    }
  },

  async updateTask (req, res, next) {
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
  },

  async deleteTask (req, res, next) {
    try {
      const task  = await Task.findByIdAndDelete(req.params.id)
      if(!task) return res.status(400).json({ message: "Task not found"})
      res.status(200).json({ message: "Task successfully deleted!"})
    } catch (error) {
      next(error)
    }
  }
}

export default userTaskController