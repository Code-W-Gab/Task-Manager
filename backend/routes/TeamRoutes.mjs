import TeamController from "../controllers/TeamControllers.mjs";
import express from 'express'
const router = express.Router()

// Create New User
router.post('/create', TeamController.createUser)
// Get All User
router.get('/getAll', TeamController.getAllUser)

export default router