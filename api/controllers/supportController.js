import CallRequest from "../models/CallRequest.js";

export async function requestCall(req, res) {
  try {
    const { name, contact, preferredTime, reason } = req.body;

    if (!name || !contact || !preferredTime) {
      return res.status(400).json({ error: "Name, contact and preferred time are required" });
    }

    await CallRequest.create({
      name,
      contact,
      preferredTime,
      reason,
      userId: req.user?.id || null,
    });

    return res.json({ message: "Request submitted" });
  } catch (err) {
    console.error("Error in requestCall:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
