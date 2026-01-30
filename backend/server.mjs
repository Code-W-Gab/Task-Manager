import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.mjs'
import TaskRoutes from './routes/TaskRoutes.mjs'
import TeamRoutes from './routes/TeamRoutes.mjs'
import SubTaskRoutes from './routes/SubTaskRoutes.mjs'
import AuthRoutes from './routes/AuthRoutes.mjs'

const app = express()
app.use(express.json())
app.use(cors()) 

// MongoDb
connectDB()

// Routes
app.use('/task', TaskRoutes, SubTaskRoutes)
app.use('/user', TeamRoutes, AuthRoutes)

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})