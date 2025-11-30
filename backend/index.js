import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import bookingsRoutes from "./routes/bookings.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingsRoutes);

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
