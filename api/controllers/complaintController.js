import Complaint from "../models/Complaint.js";
import generateTrackId from "../utils/generateTrackId.js";
import { encrypt } from "../utils/encrypt.js";

export async function fileComplaint(req, res) {
  const { category, complaint } = req.body;

  const trackingId = generateTrackId();

  await Complaint.create({
    trackingId,
    userId: req.user.id,
    category,
    complaint: encrypt(complaint),
  });

  res.json({ trackingId });
}

export async function trackComplaint(req, res) {
  const complaint = await Complaint.findOne({ trackingId: req.params.id });

  if (!complaint)
    return res.status(404).json({ error: "Invalid tracking ID" });

  res.json({ status: complaint.status });
}
