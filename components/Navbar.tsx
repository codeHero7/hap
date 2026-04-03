"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { HOTEL_DETAILS } from "@/constants/hotel-info";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 h-24 flex items-center bg-transparent">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        
        {/* Brand - Always White for the transparent look */}
        <Link href="/" className="text-2xl font-bold text-white uppercase tracking-widest drop-shadow-md">
          {HOTEL_DETAILS.name}
        </Link>

        {/* Desktop Menu - White text with shadows for readability */}
        <div className="hidden lg:flex items-center space-x-10">
          {[
            { name: "About", href: "/about" },
            { name: "Accommodation", href: "/accommodation" },
            { name: "Events", href: "/events" },
            { name: "Career", href: "/careers" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-white hover:text-hotel-gold transition-colors drop-shadow-sm"
            >
              {link.name}
            </Link>
          ))}
          
          <Link href="/availability">
            <button className="bg-white text-hotel-primary px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-hotel-gold hover:text-white transition-all shadow-lg">
              Reservation
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-hotel-primary flex flex-col items-center justify-center space-y-8 lg:hidden animate-in fade-in duration-300">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {/* Mobile Links */}
          {["About", "Accommodation", "Events", "Careers", "Contact"].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`} 
              className="text-2xl font-bold text-white uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
