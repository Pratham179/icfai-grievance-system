import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// SIGNUP
export async function signup(req, res) {
  try {
    const { name, email, password, role } = req.body;

    // Default role is "user" unless explicitly sent
    const userRole = role === "admin" ? "admin" : "user";

    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Create user
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
      role: userRole,     // <-- IMPORTANT
    });

    res.json({ message: "Signup successful", role: user.role });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}


// LOGIN
// LOGIN
export async function login(req, res) {
  try {
    const { email, password, role } = req.body;   // ⬅ also receive role from frontend

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    // ⬅ NEW: role must match DB
    if (user.role !== role) {
      return res
        .status(400)
        .json({ error: `This account is registered as ${user.role}, not ${role}.` });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, { httpOnly: true });

    return res.json({
      message: "Login success",
      role: user.role,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
}
