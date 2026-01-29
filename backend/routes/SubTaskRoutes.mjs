import express from 'express'
import { addSubTask, updateSubTask, deleteSubTask } from '../controllers/SubTaskControllers.mjs'

const router = express.Router()

router.post('/:id/subtasks', addSubTask)
router.put('/:id/subtasks/:subTaskId', updateSubTask)
router.delete('/:id/subtasks/:subTaskId', deleteSubTask)

export default router