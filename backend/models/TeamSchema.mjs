import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
    trim: true
  },
  Title: {
    type: String,
    required: true,
    trim: true
  },
  Email: {
    type: String,
    required: true,
    trim: true
  },
  Password: {
    type: String,
    required: true
  },
  Role: {
    type: String,
    required: true,
  },
  Active: {
    type: String,
    required: true,
    enum: ["Active", "Disable"],
    default: "Active"
  }, 
  UserRole: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
}, { timestamps: true });

export default mongoose.model("Teams", TeamSchema);