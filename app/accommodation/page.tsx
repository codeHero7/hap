import React from 'react';
import { ROOMS } from '@/constants/hotel-info';

export default function AccommodationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Title Section */}
      <section className="bg-hotel-primary py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter">
          Accommodation
        </h1>
        <p className="text-hotel-gold text-lg max-w-2xl mx-auto italic">
          Experience world-class luxury across our signature room categories.
        </p>
      </section>

      {/* Room Listing Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ROOMS.map((room) => (
            <div key={room.id} className="group flex flex-col border border-slate-100 rounded-2xl overflow-hidden hover:border-hotel-gold transition-all duration-300">
              
              {/* Visual Placeholder */}
              <div className="bg-slate-100 aspect-[16/10] flex items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors">
                [ {room.name} Image ]
              </div>

              {/* Room Details */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-hotel-primary uppercase">{room.name}</h2>
                  <p className="text-hotel-gold font-bold text-lg mt-1">{room.rate} <span className="text-xs text-slate-400 font-normal italic">/ night</span></p>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                  {room.description}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.features.map((feature) => (
                    <span key={feature} className="text-[10px] font-bold uppercase tracking-widest bg-slate-50 border px-3 py-1 rounded-full text-slate-500">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-hotel-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-hotel-gold transition-colors">
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
