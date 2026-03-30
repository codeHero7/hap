"use client";
import React, { useState, useEffect } from 'react';
import { ROOMS } from '@/constants/hotel-info';
import { Search, Edit2, Users, CheckCircle2 } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AvailabilityPage() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [guests, setGuests] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to toggle between 1 and 2 months
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = () => {
    if (!startDate || !endDate) {
      alert("Please select both dates");
      return;
    }
    setIsLoading(true);
    // Simulate a 1.5s delay for a premium feel
    setTimeout(() => {
      setIsLoading(false);
      setIsCollapsed(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <section className="bg-hotel-primary py-16 px-6 text-center text-white">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          {isCollapsed ? "Available Rooms" : "Check Availability"}
        </h1>
      </section>

      {/* Search Section */}
      <section className="max-w-5xl mx-auto -mt-10 px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          {!isCollapsed ? (
            <div className="p-8 flex flex-col items-center">
              <DatePicker
                selected={startDate}
                onChange={(dates: [Date | null, Date | null]) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
                }}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                minDate={new Date()}
                monthsShown={isMobile ? 1 : 2} // Shows 2 months on Desktop
                calendarClassName="hotel-double-calendar"
            />
              <div className="mt-8 flex flex-col md:flex-row items-end gap-6 w-full pt-8 border-t">
                <div className="w-full md:w-1/3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">Guests</label>
                  <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full p-4 border rounded-xl outline-none">
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
                <button onClick={handleSearch} disabled={isLoading} className="w-full md:flex-1 bg-hotel-gold text-white h-14 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-hotel-primary transition-all">
                  {isLoading ? "Searching..." : <><Search size={20} /> Check Availability</>}
                </button>
              </div>
            </div>
          ) : (
            /* Clickable Summary Bar */
            <div onClick={() => setIsCollapsed(false)} className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer hover:bg-slate-50 transition-all group">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="text-center md:text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Stay Period</span>
                  <span className="font-bold text-hotel-primary text-xl">{startDate?.toDateString()} — {endDate?.toDateString()}</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Guests</span>
                  <span className="font-bold text-hotel-primary text-xl">{guests}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-xl font-bold text-sm text-hotel-primary group-hover:bg-hotel-gold group-hover:text-white transition-all">
                <Edit2 size={16} /> Modify
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      {isCollapsed && (
        <section className="max-w-5xl mx-auto mt-16 px-6 space-y-8 animate-in fade-in slide-in-from-bottom-6">
          {ROOMS.map((room) => (
            <div key={room.id} className="bg-white rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row border border-slate-100 hover:border-hotel-gold transition-all">
              <div className="w-full md:w-1/3 aspect-video md:aspect-auto relative bg-slate-200">
                <img src={`/rooms/${room.id}.jpg`} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-hotel-primary uppercase">{room.name}</h3>
                    <div className="text-right">
                      <p className="text-hotel-gold font-bold text-2xl">{room.rate}</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Per Night</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4 mb-6">
                    {room.features.slice(0, 3).map(f => (
                      <div key={f} className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                        <CheckCircle2 size={12} className="text-green-500" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-hotel-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-hotel-gold transition-colors">
                  Reserve Room
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
