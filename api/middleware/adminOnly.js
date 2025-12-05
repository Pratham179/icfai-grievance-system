import jwt from "jsonwebtoken";
import User from "../models/User.js";

export async function adminOnly(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Not logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "Invalid user" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }

    req.user = user; // store admin info for further use
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
