import express from 'express'
import authController from '../controllers/AuthControllers.mjs'
const router = express.Router()

router.post('/login', authController.Login)

export default router