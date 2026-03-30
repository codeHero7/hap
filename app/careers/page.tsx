"use client"; // Required for state and clicks

import React, { useState } from 'react';
import { JOBS, HOTEL_DETAILS } from "@/constants/hotel-info";
import JobApplicationForm from "@/components/JobApplicationForm"; // The form we created earlier

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white relative">
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
              {/* Updated Button to set the selected job */}
              <button 
                onClick={() => setSelectedJob(job.title)}
                className="bg-hotel-primary text-white px-6 py-2 rounded uppercase text-xs font-bold hover:bg-hotel-gold transition-colors"
              >
                Apply
              </button>
            </div>
            <p className="text-slate-600 text-sm">{job.description}</p>
          </div>
        ))}
      </section>

      {/* MODAL OVERLAY */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 relative shadow-2xl animate-in zoom-in-95">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold text-hotel-primary mb-1">Apply for Position</h2>
            <p className="text-hotel-gold font-medium mb-6 uppercase text-sm tracking-widest">{selectedJob}</p>
            
            {/* The Form Component */}
            <JobApplicationForm position={selectedJob} />
          </div>
        </div>
      )}
    </main>
  );
}
