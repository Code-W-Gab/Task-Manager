import TeamController from "../controllers/TeamControllers.mjs";
import express from 'express'
const router = express.Router()

// Create New User
router.post('/create', TeamController.createUser)
// Get All User
router.get('/getAll', TeamController.getAllUser)
// Get User by Id
router.get('/:id', TeamController.getUserById)
// Delete User
router.delete('/:id', TeamController.deleteUser)
// Update User
router.put('/:id', TeamController.updateUser)

export default router