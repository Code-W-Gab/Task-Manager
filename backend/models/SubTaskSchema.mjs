import mongoose from "mongoose";

const SubTaskSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true
  },
  Date: {
    type: Date,
    required: false
  },
  Tag: {
    type: String,
    trim: true
  },
  Completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default SubTaskSchema