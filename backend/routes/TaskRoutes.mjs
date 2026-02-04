import express from 'express'
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../controllers/admin/TaskControllers.mjs'
import auth from '../middleware/auth.mjs'
import isAdmin from '../middleware/isAdmin.mjs'

const router = express.Router()

router.post('/create', auth, isAdmin, createTask)
router.get('/all', auth, isAdmin, getAllTasks)
router.get('/:id', auth, isAdmin, getTaskById)
router.put('/:id', auth, isAdmin, updateTask)
router.delete('/:id', auth,  deleteTask)

export default router