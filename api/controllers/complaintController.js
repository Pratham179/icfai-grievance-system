import Complaint from "../models/Complaint.js";
import generateTrackId from "../utils/generateTrackId.js";

export async function fileComplaint(req, res) {
  try {
    const { name, contact, email, branch, category, complaint } = req.body;

    if (!name || !contact || !email || !branch || !category || !complaint) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const trackingId = generateTrackId();

    await Complaint.create({
      trackingId,
      userId: req.user.id,
      name,
      contact,
      email,
      branch,
      category,
      complaint,
      status: "open",
    });

    return res.json({ trackingId });

  } catch (err) {
    console.error("Error filing complaint:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

// 🔥 ADD THIS
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


export async function getUserStats(req, res) {
  try {
    const userId = req.user.id;

    const total = await Complaint.countDocuments({ userId });
    const resolved = await Complaint.countDocuments({
      userId,
      status: "resolved",
    });
    const pending = await Complaint.countDocuments({
      userId,
      status: { $ne: "resolved" },
    });

    res.json({ total, resolved, pending });
  } catch (err) {
    console.error("Stats error:", err);
    res.status(500).json({ error: "Server error" });
  }
}

