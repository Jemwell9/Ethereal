import { bookings, type Booking, type InsertBooking } from "@shared/schema";

export interface IStorage {
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  getBookingsByDate(date: Date): Promise<Booking[]>;
}

export class MemStorage implements IStorage {
  private bookings: Map<number, Booking>;
  currentId: number;

  constructor() {
    this.bookings = new Map();
    this.currentId = 1;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentId++;
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      status: "pending" 
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBookingsByDate(date: Date): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      booking => booking.date.toDateString() === date.toDateString()
    );
  }
}

export const storage = new MemStorage();
