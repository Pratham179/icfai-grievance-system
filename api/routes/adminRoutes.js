import express from "express";
import { adminOnly } from "../middleware/adminOnly.js";
import { getAllComplaints, updateComplaintStatus } from "../controllers/adminController.js";

const router = express.Router();

router.get("/complaints", adminOnly, getAllComplaints);
router.put("/complaints/:id/status", adminOnly, updateComplaintStatus);

export default router;
