"use client";
import { useState } from "react";
import { createBooking } from "@/app/actions/booking";

interface BookingFormProps {
  roomTypeId: string;
  roomName: string;
  checkIn?: string;
  checkOut?: string;
}

export default function BookingForm({ roomTypeId, roomName, checkIn, checkOut }: BookingFormProps) {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    const result = await createBooking(formData);
    setIsPending(false);
    
    if (result.success) alert("Booking Confirmed!");
    else alert("Booking Failed. Please try again.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-2xl shadow-sm border">
      <h3 className="text-xl font-bold text-hotel-primary uppercase">Reserve: {roomName}</h3>
      
      <input type="hidden" name="roomTypeId" value={roomTypeId} />
      <input type="hidden" name="checkIn" value={checkIn} />
      <input type="hidden" name="checkOut" value={checkOut} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" type="text" placeholder="Full Name" required className="p-3 border rounded-xl outline-none" />
        <input name="email" type="email" placeholder="Email Address" required className="p-3 border rounded-xl outline-none" />
      </div>

      <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-500">
        <p>Selected Dates: <strong>{checkIn}</strong> to <strong>{checkOut}</strong></p>
      </div>

      <button 
        type="submit" 
        disabled={isPending}
        className="w-full bg-hotel-gold text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-hotel-primary transition-all disabled:bg-slate-300"
      >
        {isPending ? "Confirming..." : "Confirm Reservation"}
      </button>
    </form>
  );
}
