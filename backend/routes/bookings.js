import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// In-memory bookings "database" — replace with real DB (Mongo, PostgreSQL, etc.)
const bookings = [];

// GET /api/bookings - Get all bookings for a user
router.get("/", authMiddleware, (req, res) => {
  const userId = req.user.id;
  const userBookings = bookings.filter(b => b.userId === userId);
  res.json(userBookings);
});

// POST /api/bookings - Create a new booking
router.post("/", authMiddleware, (req, res) => {
  const { title, location, from, to, guests, price } = req.body;
  const userId = req.user.id;
  
  if (!title || !location || !from || !to || !guests) {
    return res.status(400).json({ error: "Missing required booking fields" });
  }
  
  const newBooking = {
    id: bookings.length + 1,
    userId,
    title,
    location,
    from,
    to,
    guests,
    price: price || 0,
    createdAt: new Date().toISOString(),
  };
  
  bookings.push(newBooking);
  res.status(201).json({ message: "Booking created successfully", booking: newBooking });
});

// DELETE /api/bookings/:id - Delete a booking
router.delete("/:id", authMiddleware, (req, res) => {
  const userId = req.user.id;
  const bookingId = parseInt(req.params.id);
  
  const index = bookings.findIndex(b => b.id === bookingId && b.userId === userId);
  
  if (index === -1) {
    return res.status(404).json({ error: "Booking not found or unauthorized" });
  }
  
  bookings.splice(index, 1);
  res.json({ message: "Booking deleted successfully" });
});

export default router;
