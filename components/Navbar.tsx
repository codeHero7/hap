"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import { HOTEL_DETAILS } from "@/constants/hotel-info";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-hotel-primary uppercase tracking-widest">
          {HOTEL_DETAILS.name}
        </Link>

        {/* Desktop Menu - Visible only on Large screens */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium hover:text-hotel-secondary">About</Link>
          <Link href="/accommodation" className="text-sm font-medium hover:text-hotel-secondary">Accommodation</Link>
          <Link href="/events" className="text-sm font-medium hover:text-hotel-secondary">Events</Link>
          <Link href="/careers" className="text-sm font-medium hover:text-hotel-secondary">Career</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-hotel-secondary">Contact</Link>
          <button className="bg-hotel-primary text-white px-6 py-2 rounded-md">Reservation</button>
        </div>

        {/* Mobile Toggle - Hidden on Large screens */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white p-6 border-b shadow-lg lg:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/rooms" onClick={() => setIsOpen(false)}>Accommodation</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
