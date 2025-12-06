import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
  trackingId: String,
  userId: String,
  name: String,
  contact: String,
  email: String,
  branch: String,
  incidentDate: { type: String, required: true }, 
  category: String,
  complaint: String,
  status: { type: String, default: "open" },
});

export default mongoose.model("Complaint", ComplaintSchema);
