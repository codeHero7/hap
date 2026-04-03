"use client";
import React, { useState, useRef } from 'react';
import { Send, Users, Calendar, Info, Loader2, CheckCircle, Phone } from 'lucide-react';
import { submitEventInquiry } from '@/app/actions/events';
import { EVENTS } from '@/constants/hotel-info';

export default function EventInquiry({ initialEventId }: { initialEventId?: string | null }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // New state for success message
  const [formData, setFormData] = useState({
    name: '',
    phone: '', // Added phone
    email: '',
    eventType: initialEventId || EVENTS[0].id, 
    guests: '',
    date: '',
    notes: ''
  });

  const today = new Date().toISOString().split('T')[0];
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await submitEventInquiry(formData);
    setLoading(false);
    
    if (result.success) {
      setSubmitted(true); // Show success message
    } else {
      alert("Failed to send inquiry. Please try again.");
    }
  };

  // SUCCESS MESSAGE VIEW
  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-16 text-center shadow-xl border border-slate-100 animate-in fade-in zoom-in-95">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h2 className="text-3xl font-bold text-hotel-primary mb-2">Enquiry Sent!</h2>
        <p className="text-slate-500 text-lg">Thank you for reaching out. We will get back to you shortly.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-hotel-gold font-bold uppercase tracking-widest text-sm hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-hotel-primary p-8 text-center text-white">
          <h2 className="text-3xl font-bold uppercase tracking-widest">Plan Your Event</h2>
          <p className="text-hotel-gold mt-2 italic text-sm">Tell us about your celebration, and we’ll handle the rest.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Full Name *</label>
              <input type="text" required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold"
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>

            {/* MANDATORY PHONE FIELD */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 flex items-center gap-1">
                <Phone size={12}/> Phone Number *
              </label>
              <input type="tel" required placeholder="e.g. +91 9876543210" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold"
                onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>

            {/* OPTIONAL EMAIL FIELD */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Email Address (Optional)</label>
              <input type="email" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold"
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Event Type *</label>
              <select 
                value={formData.eventType}
                onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold appearance-none"
              >
                {EVENTS.map((event) => (
                  <option key={event.id} value={event.id}>{event.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 flex items-center gap-1">
                <Users size={12}/> Estimated Guests (Optional)
              </label>
              <input 
                type="number" 
                placeholder="e.g. 150"
                className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold"
                onChange={(e) => setFormData({...formData, guests: e.target.value})} 
              />
            </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 flex items-center gap-1">
              <Calendar size={12}/> Preferred Date *
            </label>
            <div 
              onClick={() => dateInputRef.current?.showPicker()} // Opens picker on box click
              className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center cursor-pointer hover:border-hotel-gold transition-colors"
            >
              <input 
                ref={dateInputRef}
                type="date" 
                required 
                min={today} // Disables previous days
                className="w-full bg-transparent outline-none cursor-pointer"
                onChange={(e) => setFormData({...formData, date: e.target.value})} 
              />
            </div>
          </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 flex items-center gap-1"><Info size={12} /> Requirements</label>
            <textarea rows={4} className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-hotel-gold resize-none"
              onChange={(e) => setFormData({...formData, notes: e.target.value})}></textarea>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-hotel-gold text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-hotel-primary transition-all flex items-center justify-center gap-3 disabled:bg-slate-300">
            {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
            {loading ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
