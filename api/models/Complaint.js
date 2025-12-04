import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  trackingId: String,
  userId: mongoose.Schema.Types.ObjectId,
  category: String,
  complaint: String,   // encrypted
  status: { type: String, default: "open" },
}, { timestamps: true });

export default mongoose.model("Complaint", complaintSchema);
