import TeamController from "../controllers/TeamControllers.mjs";
import express from 'express'
const router = express.Router()
import isAdmin from '../middleware/isAdmin.mjs'
import auth from "../middleware/auth.mjs";

// Create New User
router.post('/create', auth, isAdmin, TeamController.createUser)
// Get All User
router.get('/getAll', auth, TeamController.getAllUser)
// Get User by Id
router.get('/:id', auth, isAdmin, TeamController.getUserById)
// Delete User
router.delete('/:id', auth, TeamController.deleteUser)
// Update User
router.put('/:id', auth, isAdmin, TeamController.updateUser)

export default router