import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  fileComplaint,
  trackComplaint,
  getUserStats,
} from "../controllers/complaintController.js";
import adminMiddleware from "../middleware/adminMiddleware.js";


const router = express.Router();

router.post("/file", authMiddleware, fileComplaint);
router.get("/track/:id", trackComplaint);
router.get("/stats", authMiddleware, getUserStats);
router.get("/admin/all", adminMiddleware, async (req, res) => {
  const complaints = await Complaint.find().sort({ createdAt: -1 });
  res.json(complaints);
  });


export default router;
