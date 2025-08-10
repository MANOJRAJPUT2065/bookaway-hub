import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// In-memory user "database" — replace with real DB (Mongo, PostgreSQL, etc.)
const users = [];

// Signup route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  const userExists = users.find(u => u.email === email);
  if (userExists) return res.status(400).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User created successfully" });
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Protected route example
router.get("/me", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

export default router;
