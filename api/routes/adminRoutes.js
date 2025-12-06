import express from "express";
import { adminOnly } from "../middleware/adminOnly.js";
import { getAllComplaints, updateComplaintStatus } from "../controllers/adminController.js";
import { getCallRequests, updateCallStatus } from "../controllers/supportController.js";

const router = express.Router();

router.get("/complaints", adminOnly, getAllComplaints);
router.put("/complaints/:id/status", adminOnly, updateComplaintStatus);

router.get("/call-requests", adminOnly, getCallRequests);
router.put("/call-requests/:id", adminOnly, updateCallStatus);

export default router;
