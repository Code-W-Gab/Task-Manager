import TeamSchema from '../../models/TeamSchema.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const authController = {
  async Login (req, res, next) {
    try {
      const { Email, Password } = req.body
      const user = await TeamSchema.findOne({Email})
      if (!user) return res.status(400).json({ message: "invalid credentials! (email)"})
      
      // decrypt hash password
      const isMatch = await bcrypt.compare(Password, user.Password)
      if (!isMatch) return res.status(400).json({ message: "invalid credentials! (password)"})
      
      // Creating token
      const token = jwt.sign(
        { id: user._id,
          role: user.UserRole  
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      )
      res.status(201).json({token, role: user.UserRole})
    } catch (error) {
      next(error)
    }
  }
}

export default authController