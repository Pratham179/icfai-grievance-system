import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^[A-Za-z0-9._%+-]+@icfai\.edu$/, "Use official ICFAI email"]
  },

  password: { type: String, required: true },

  role: { 
    type: String, 
    enum: ["user", "admin"], 
    default: "user" 
  }
});

export default mongoose.model("User", userSchema);
