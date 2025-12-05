import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  fileComplaint,
  trackComplaint,
  getUserStats,
} from "../controllers/complaintController.js";


const router = express.Router();

router.post("/file", authMiddleware, fileComplaint);
router.get("/track/:id", trackComplaint);
router.get("/stats", authMiddleware, getUserStats);


export default router;
