import React from 'react';
import { HOTEL_DETAILS } from '@/constants/hotel-info';
import { Mail, Phone, MapPin, Clock } from 'lucide-react'; // npm install lucide-react

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-hotel-primary py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter">
          Connect With Us
        </h1>
        <p className="text-hotel-gold text-lg max-w-2xl mx-auto italic">
          We are here to assist you 24/7. Reach out for reservations, events, or inquiries.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Contact Info & Map */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-hotel-primary mb-8 uppercase">Get In Touch</h2>
            <div className="space-y-6">
              <ContactItem 
                icon={<Phone className="text-hotel-gold" />} 
                title="Phone" 
                detail={HOTEL_DETAILS.phone} 
              />
              <ContactItem 
                icon={<Mail className="text-hotel-gold" />} 
                title="Email" 
                detail={HOTEL_DETAILS.email} 
              />
              <ContactItem 
                icon={<MapPin className="text-hotel-gold" />} 
                title="Location" 
                detail={HOTEL_DETAILS.address} 
              />
              <ContactItem 
                icon={<Clock className="text-hotel-gold" />} 
                title="Reception" 
                detail="Open 24 Hours / 7 Days" 
              />
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-80 bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center text-slate-400 italic">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5060279120594!2d85.06762667573034!3d25.62132571439073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed572d360e8945%3A0x604c49bde252e857!2sHotel%20Aurelia%20Pearl%20%26%20Banquet!5e0!3m2!1sen!2sin!4v1774801574739!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{border:0}}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
          <h3 className="text-2xl font-bold text-hotel-primary mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-slate-200 focus:border-hotel-gold outline-none transition" />
              <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-slate-200 focus:border-hotel-gold outline-none transition" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl border border-slate-200 focus:border-hotel-gold outline-none transition" />
            <textarea placeholder="How can we help you?" rows={5} className="w-full p-4 rounded-xl border border-slate-200 focus:border-hotel-gold outline-none transition resize-none"></textarea>
            <button className="w-full bg-hotel-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-hotel-gold transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function ContactItem({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-hotel-primary text-sm uppercase tracking-wider">{title}</h4>
        <p className="text-slate-600">{detail}</p>
      </div>
    </div>
  );
}
