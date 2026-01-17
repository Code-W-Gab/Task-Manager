import express from 'express'
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../controllers/TaskControllers.mjs'

const router = express.Router()

router.post('/create', createTask)
router.get('/all', getAllTasks)
router.get('/:id', getTaskById)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router