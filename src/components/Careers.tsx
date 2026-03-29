import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Upload, ArrowRight } from 'lucide-react';

export const Careers = () => {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Remote / Colombo",
      category: "Engineering"
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Colombo",
      category: "Design"
    },
    {
      title: "Mobile App Developer (React Native)",
      type: "Full-time",
      location: "Remote",
      category: "Engineering"
    },
    {
      title: "AI Research Intern",
      type: "Internship",
      location: "Colombo",
      category: "Research"
    }
  ];

  return (
    <section id="careers" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-6">Join Our Team</h2>
          <h3 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-[1.1]">Build the Future with Us</h3>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            We're always looking for talented individuals who are passionate about technology and innovation. Explore our open positions and start your journey with Gmart Online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Open Positions */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-2xl md:text-3xl font-black text-primary mb-8 md:mb-10 flex items-center gap-4">
              <Briefcase className="text-accent w-7 h-7 md:w-8 md:h-8" />
              Open Positions
            </h4>
            {positions.map((job, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 12 }}
                className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <div className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2">{job.category}</div>
                    <h5 className="text-xl md:text-2xl font-black text-primary group-hover:text-accent transition-colors tracking-tight">{job.title}</h5>
                    <div className="flex flex-wrap gap-4 md:gap-6 mt-4 text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CV Submission Form */}
          <div className="bg-white p-8 md:p-10 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h4 className="text-2xl md:text-3xl font-black text-primary mb-10">Submit Your CV</h4>
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-sm md:text-base"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-sm md:text-base"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Position Interested In</label>
                <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-white font-medium appearance-none text-sm md:text-base">
                  <option value="">Select a position</option>
                  {positions.map((job, idx) => (
                    <option key={idx} value={job.title}>{job.title}</option>
                  ))}
                  <option value="Other">Other / General Application</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Upload CV (PDF/DOCX)</label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex flex-col items-center justify-center w-full h-32 md:h-40 border-2 border-dashed border-slate-200 rounded-[1.5rem] md:rounded-[2rem] hover:border-accent hover:bg-accent/5 transition-all cursor-pointer group"
                  >
                    <Upload className="w-8 h-8 md:w-10 md:h-10 text-slate-300 group-hover:text-accent mb-3 transition-transform group-hover:-translate-y-1" />
                    <span className="text-[10px] md:text-sm font-bold text-slate-400 group-hover:text-accent uppercase tracking-widest text-center px-4">Click to upload or drag and drop</span>
                  </label>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Cover Letter / Message</label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none font-medium text-sm md:text-base"
                  placeholder="Tell us why you're a great fit..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-tech-gradient text-white py-5 md:py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:shadow-2xl hover:shadow-accent/40 transition-all active:scale-[0.98]"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
