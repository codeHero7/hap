"use client";
import React, { useState } from 'react';
import { EVENTS } from '@/constants/hotel-info';
import EventInquiry from '@/components/EventInquiry';

export default function EventsPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-hotel-primary py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter">
          Events & Celebrations
        </h1>
        <p className="text-hotel-gold text-lg max-w-2xl mx-auto italic">
          Turning your special moments into unforgettable memories.
        </p>
      </section>

      {/* Events Showcase */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="space-y-24">
          {EVENTS.map((event, index) => (
            <div 
              key={event.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 aspect-video bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm">
                <img
                  alt={`${event.name}`}
                  src={`/events/${event.id}.jpg`}
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-hotel-primary uppercase tracking-tight">
                  {event.name}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {event.description}
                </p>
                
                <div className="flex items-center gap-4 py-2">
                  <span className="text-hotel-gold font-bold uppercase text-xs tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-hotel-gold/20">
                    {event.capacity}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {event.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-hotel-gold" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setIsOpen(true)}
                  className="mt-4 px-8 py-4 bg-hotel-primary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-hotel-gold transition-all">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-slate-50 py-20 px-6 text-center">
        <h3 className="text-2xl font-bold text-hotel-primary mb-4">Planning an Event?</h3>
        <p className="text-slate-500 mb-8">Contact our dedicated event planners to discuss your requirements.</p>
        <div className="text-xl font-bold text-hotel-gold underline underline-offset-8">
          events@grandazure.com
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
             {/* Close Button */}
             <button 
               onClick={() => setIsOpen(false)}
               className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full hover:bg-red-500 hover:text-white transition-all font-bold"
             >
               ✕
             </button>
             
             {/* Use the Component, NOT the Page function */}
             <EventInquiry />
          </div>
        </div>
      )}
    </main>
  );
}
