import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-hotel-primary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
        <p className="text-lg text-hotel-gold max-w-2xl mx-auto italic">
          Defining luxury and comfort since 2021.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-hotel-primary mb-6">A Legacy of Excellence</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Founded with a vision to provide a sanctuary for travelers, The Grand Azure 
            combines modern sophistication with timeless hospitality. Every corner of our 
            property is designed to offer peace and inspiration.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Whether you are here for a business meeting or a family getaway, our dedicated 
            team is committed to making your stay unforgettable with personalized service 
            and world-class amenities.
          </p>
        </div>
        <div className="bg-slate-100 aspect-square rounded-2xl flex items-center justify-center text-slate-400">
           {/* Replace with an <img /> tag later */}
           [Hotel History Image]
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard title="Integrity" desc="We believe in being honest and straightforward with our guests." />
            <ValueCard title="Excellence" desc="We strive for perfection in every service we provide." />
            <ValueCard title="Sustainability" desc="Committed to protecting our environment through green practices." />
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-8 bg-white shadow-sm rounded-xl border border-slate-100">
      <h3 className="text-xl font-bold text-hotel-primary mb-3">{title}</h3>
      <p className="text-slate-500">{desc}</p>
    </div>
  );
}
