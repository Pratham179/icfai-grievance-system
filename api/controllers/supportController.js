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

// Get all call requests for admin
export async function getCallRequests(req, res) {
  try {
    const requests = await CallRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch call requests" });
  }
}

// Update call request status (pending → completed)
export async function updateCallStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await CallRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update request status" });
  }
}