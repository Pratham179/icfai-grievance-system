import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Complaint from "../models/Complaint.js";

export async function adminLogin(req, res) {
  const { email, password } = req.body;

  const admin = await User.findOne({ email, isAdmin: true });
  if (!admin) return res.status(403).json({ error: "Unauthorized" });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: admin._id, isAdmin: true }, process.env.JWT_SECRET);

  res.cookie("token", token, { httpOnly: true });

  res.json({ message: "Admin Login Successful" });
}

export async function getAllComplaints(req, res) {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
}

export async function updateComplaintStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await Complaint.findByIdAndUpdate(id, { status });
    res.json({ message: "Status updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
}