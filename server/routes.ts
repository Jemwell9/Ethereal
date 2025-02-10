import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  app.post("/api/bookings", async (req, res) => {
    try {
      const booking = insertBookingSchema.parse(req.body);
      const result = await storage.createBooking(booking);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid booking data" });
    }
  });

  app.get("/api/bookings", async (req, res) => {
    const bookings = await storage.getBookings();
    res.json(bookings);
  });

  app.get("/api/bookings/date/:date", async (req, res) => {
    const date = new Date(req.params.date);
    const bookings = await storage.getBookingsByDate(date);
    res.json(bookings);
  });

  const httpServer = createServer(app);
  return httpServer;
}
