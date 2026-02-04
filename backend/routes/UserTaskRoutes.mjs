import express from 'express'
import userTaskController from '../controllers/user/UserTaskControllers.mjs'
import auth from '../middleware/auth.mjs'

const router = express.Router()

router.get('/my-tasks', auth, userTaskController.getMyTasks)

export default router