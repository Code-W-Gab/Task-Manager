import mongoose from "mongoose";

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
  }
}, { timestamps: true });

export default mongoose.model("Task", TaskSchema);