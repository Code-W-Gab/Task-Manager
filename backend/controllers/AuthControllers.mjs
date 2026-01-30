import TeamSchema from '../models/TeamSchema.mjs';
import bcrypt from 'bcrypt';

const authController = {
  async Login (req, res, next) {
    try {
      const { Email, Password } = req.body
      const user = await TeamSchema.findOne({Email})
      if (!user) return res.status(400).json({ message: "invalid credentials!"})
      
      // decrypt hash password
      const isMatch = await bcrypt.compare(Password, user.Password)
      if (!isMatch) return res.status(400).json({ message: "invalid credentials!"})
      
      res.status(200).json({message: "Login successfully!"})
    } catch (error) {
      next(error)
    }
  }
}

export default authController