import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.mjs'
import TaskRoutes from './routes/TaskRoutes.mjs'
import TeamRoutes from './routes/TeamRoutes.mjs'
import SubTaskRoutes from './routes/SubTaskRoutes.mjs'
import AuthRoutes from './routes/AuthRoutes.mjs'
import UserTaskRoutes from './routes/UserTaskRoutes.mjs'

const app = express()
app.use(express.json())
app.use(cors()) 

// MongoDb
connectDB()

// Routes
// Admin Routes
app.use('/admin/task', TaskRoutes) 
app.use('/admin/sub-task', SubTaskRoutes)
app.use('/admin/team', TeamRoutes)
// Auth Routes
app.use('/auth', AuthRoutes) 
// User Routes
app.use('/user/task', UserTaskRoutes) 

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})