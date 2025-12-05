import { Router } from "express";
import { requestCall } from "../controllers/supportController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

// you can make it public or only for logged in users
router.post("/request-call", authMiddleware, requestCall);
// or without auth: router.post("/request-call", requestCall);

export default router;
