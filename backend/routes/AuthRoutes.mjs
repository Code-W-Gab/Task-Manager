import express from 'express'
import authController from '../controllers/auth/AuthControllers.mjs'
import auth from '../middleware/auth.mjs'
const router = express.Router()

router.post('/login', authController.Login)
router.get('/me', auth, authController.getCurrentUser)

export default router