import jwt from "jsonwebtoken";

export default function adminMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Not Logged In" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(403).json({ error: "Access Denied" });
    }
    req.admin = decoded;
    next();
  } catch {
    return res.status(403).json({ error: "Invalid token" });
  }
}
