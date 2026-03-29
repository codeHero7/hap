// app/careers/page.tsx
import React from 'react';
import { JOBS, HOTEL_DETAILS } from "@/constants/hotel-info";

// 1. Make sure it says 'export default'
// 2. Make sure the function starts with a Capital Letter (CareersPage)
export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-hotel-primary py-20 px-6 text-center text-white">
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">Join Our Team</h1>
        <p className="text-hotel-gold italic">{HOTEL_DETAILS.name} Careers</p>
      </header>

      {/* Job List */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-6">
        {JOBS.map((job) => (
          <div key={job.id} className="border p-8 rounded-2xl hover:border-hotel-gold transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-hotel-primary uppercase">{job.title}</h2>
                <span className="text-xs font-bold text-hotel-gold uppercase tracking-widest">
                  {job.experienceInfo}
                </span>
              </div>
              <button className="bg-hotel-primary text-white px-6 py-2 rounded uppercase text-xs font-bold">
                Apply
              </button>
            </div>
            <p className="text-slate-600 text-sm">{job.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
