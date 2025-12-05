import mongoose from "mongoose";

const CallRequestSchema = new mongoose.Schema(
  {
    name: String,
    contact: String,
    preferredTime: String,
    reason: String,
    userId: { type: String }, // optional: if logged in
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("CallRequest", CallRequestSchema);
