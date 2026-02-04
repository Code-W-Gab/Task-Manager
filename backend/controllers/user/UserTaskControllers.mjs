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
  } 
}

export default userTaskController