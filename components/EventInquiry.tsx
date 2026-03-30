"use client";
import React, { useState } from 'react';
import { HOTEL_DETAILS } from '@/constants/hotel-info';
import { Send, Users, Calendar, Info } from 'lucide-react';

export default function EventInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Wedding',
    guests: '',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    alert("Thank you! Our event planning team will contact you shortly.");
  };

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-hotel-primary p-8 text-center text-white">
          <h2 className="text-3xl font-bold uppercase tracking-widest">Plan Your Event</h2>
          <p className="text-hotel-gold mt-2 italic text-sm">Tell us about your celebration, and we’ll handle the rest.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Full Name</label>
              <input 
                type="text" required
                className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Email Address</label>
              <input 
                type="email" required
                className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Event Specifics */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Event Type</label>
              <select 
                className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold appearance-none"
                onChange={(e) => setFormData({...formData, eventType: e.target.value})}
              >
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Tilak Ceremony</option>
                <option>Birthday Party</option>
                <option>Corporate Meeting</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 flex items-center gap-1">
                <Users size={12} /> Expected Guests
              </label>
              <input 
                type="number" placeholder="e.g. 150"
                className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold"
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 flex items-center gap-1">
              <Calendar size={12} /> Preferred Date
            </label>
            <input 
              type="date"
              className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold"
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 flex items-center gap-1">
              <Info size={12} /> Additional Requirements
            </label>
            <textarea 
              rows={4} placeholder="Tell us more about your vision..."
              className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold resize-none"
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-hotel-gold text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-hotel-primary transition-all flex items-center justify-center gap-3 shadow-lg shadow-hotel-gold/20"
          >
            <Send size={18} />
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
