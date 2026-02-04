import Team from "../../models/TeamSchema.mjs";
import bcrypt from 'bcrypt'

const TeamController = {
  // Create New User
  async createUser (req, res, next) {
    try {
      const { FullName, Title, Email, Password, Role } = req.body

      // If User Already Exist Try Another Email
      const userExist = await Team.findOne({Email})
      if (userExist) return res.status(400).json({ message: "User already exists"})

      // Hash Password (encrypt)
      const hashedPassword = await bcrypt.hash(Password, 10);

      const newUser = new Team({
        FullName,
        Title,
        Email,
        Password: hashedPassword,
        Role
      })
      await newUser.save()
      res.status(201).json(newUser)
    } catch (error) {
      next(error)
    }
  },

  // Get All User
  async getAllUser (req, res, next) {
    try {
      const user = await Team.find()
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },

  // Get User by Id
  async getUserById (req, res, next){
    try {
      const user = await Team.findById(req.params.id)
      if (!user) return res.status(400).json({ message: "User not found" })
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  },

  // Delete user
  async deleteUser (req, res, next){
    try {
      const user = await Team.findByIdAndDelete(req.params.id)
      if (!user) return res.status(400).json({ message: "User not found"})
      res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
      next(error)
    }
  },

  // Update user
  async updateUser (req, res, next){
    try {
      const updatedUser = await Team.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      )
      if (!updatedUser) return res.status(400).json({ message: "User not found" })
      res.status(200).json(updatedUser)
    } catch (error) {
      next(error)
    }
  }
}

export default TeamController