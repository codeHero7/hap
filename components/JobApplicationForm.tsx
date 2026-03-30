"use client";
import { useState } from 'react';
import { submitApplication } from '@/app/actions/apply';

export default function JobApplicationForm({ position }: { position: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const result = await submitApplication(formData);
    
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      alert("Failed to send application. Check terminal for nodemailer errors.");
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="text-green-500 text-5xl mb-4 text-center">✓</div>
        <h3 className="text-xl font-bold text-hotel-primary">Application Sent!</h3>
        <p className="text-slate-500">We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="position" value={position} />
      
      <input 
        name="name" type="text" required placeholder="Full Name" 
        className="w-full p-3 border rounded-xl outline-none focus:border-hotel-gold bg-slate-50"
      />
      
      <input 
        name="email" type="email" required placeholder="Email Address" 
        className="w-full p-3 border rounded-xl outline-none focus:border-hotel-gold bg-slate-50"
      />

      <div className="space-y-1">
        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Upload Resume (PDF/DOCX)</label>
        <input 
          name="resume" type="file" required accept=".pdf,.docx" 
          className="w-full p-2 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-hotel-gold file:text-white hover:file:bg-hotel-primary"
        />
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-hotel-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-hotel-gold transition-all disabled:bg-slate-300"
      >
        {status === 'loading' ? 'Processing...' : 'Submit Application'}
      </button>
    </form>
  );
}
