import mongoose from "mongoose";
import SubTaskSchema from "./SubTaskSchema.mjs";

const TaskSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true
  },
  AssignedTo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teams"
  }],
  Stage: {
    type: String,
    required: true,
    enum: ["ToDo", "In-Progress", "Completed"],
    default: "ToDo"
  },
  Date: {
    type: Date,
    required: false
  },
  PriorityLevel: {
    type: String,
    required: true,
    enum: ["Normal", "Medium", "High"],
    default: "Normal"
  }, 
  SubTasks: [SubTaskSchema]
}, { timestamps: true });

export default mongoose.model("Task", TaskSchema);