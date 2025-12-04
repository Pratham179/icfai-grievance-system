import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ error: "Not authenticated" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}
