import Complaint from "../models/Complaint.js";
import generateTrackId from "../utils/generateTrackId.js";

export async function fileComplaint(req, res) {
  try {
    const { category, complaint } = req.body;

    const trackingId = generateTrackId();

    await Complaint.create({
      trackingId,
      userId: req.user.id,
      category,
      complaint,  // <-- plain text
      status: "open",
    });

    return res.json({ trackingId });
  } catch (err) {
    console.error("Error filing complaint:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

export async function trackComplaint(req, res) {
  try {
    const complaint = await Complaint.findOne({ trackingId: req.params.id });

    if (!complaint) {
      return res.status(404).json({ error: "Invalid tracking ID" });
    }

    return res.json({ status: complaint.status });
  } catch (err) {
    console.error("Error tracking complaint:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
