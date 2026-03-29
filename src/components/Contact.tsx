import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-24 bg-slate-50">
              <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-6">Contact</h2>
              <h3 className="text-3xl md:text-5xl font-black text-primary mb-10 md:mb-12 leading-[1.1]">Let's turn your ideas into reality.</h3>
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                    <Mail className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-base md:text-lg font-black text-primary mb-1">Email Us</div>
                    <div className="text-sm md:text-base text-slate-600 font-medium">hello@gmartonline.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                    <Phone className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-base md:text-lg font-black text-primary mb-1">Call Us</div>
                    <div className="text-sm md:text-base text-slate-600 font-medium">+94 11 234 5678</div>
                  </div>
                </div>
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-base md:text-lg font-black text-primary mb-1">Visit Us</div>
                    <div className="text-sm md:text-base text-slate-600 font-medium">Colombo, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 lg:p-24">
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-sm md:text-base"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none font-medium text-sm md:text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-tech-gradient text-white py-5 md:py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:shadow-2xl hover:shadow-accent/40 transition-all active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
