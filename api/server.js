import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
import supportRoutes from "./routes/supportRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";


dotenv.config();
connectDB();


// console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);
// console.log("Loaded JWT_SECRET:", process.env.JWT_SECRET);
// console.log("Loaded MONGO URI:", process.env.MONGO_URI);

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/admin", adminRoutes);
app.use("/uploads", express.static("uploads"));


app.listen(process.env.PORT, () => {
  console.log("Server running on " + process.env.PORT);
});
