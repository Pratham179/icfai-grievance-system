import Complaint from "../models/Complaint.js";
import generateTrackId from "../utils/generateTrackId.js";

export async function fileComplaint(req, res) {
  try {
    const {
      name,
      contact,
      email,
      branch,
      incidentDate,
      category,
      complaint
    } = req.body;

    const trackingId = generateTrackId();

    const attachments = req.files?.map(file => ({
      fileName: file.originalname,
      filePath: file.path
    })) || [];

    await Complaint.create({
      trackingId,
      userId: req.user.id,
      name,
      contact,
      email,
      branch,
      incidentDate,
      category,
      complaint,
      attachments,     // <-- SAVE FILES
      status: "open",
    });

    res.json({ trackingId });

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


export async function getUserStats(req, res) {
  try {
    const total = await Complaint.countDocuments();
    const resolved = await Complaint.countDocuments({ status: "resolved" });
    const inProgress = await Complaint.countDocuments({ status: "in-progress" });

    res.json({ total, resolved, inProgress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}


