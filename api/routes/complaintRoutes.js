import express from "express";
import { fileComplaint, trackComplaint } from "../controllers/complaintController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/file", authMiddleware, fileComplaint);
router.get("/track/:id", trackComplaint);

export default router;
