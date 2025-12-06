import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  fileComplaint,
  trackComplaint,
  getUserStats,
} from "../controllers/complaintController.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/file",
  authMiddleware,
  upload.array("attachments", 5), // Multer enabled
  fileComplaint
);

router.get("/track/:id", trackComplaint);
router.get("/stats", authMiddleware, getUserStats);

router.get("/admin/all", adminMiddleware, async (req, res) => {
  const complaints = await Complaint.find().sort({ createdAt: -1 });
  res.json(complaints);
});

export default router;
