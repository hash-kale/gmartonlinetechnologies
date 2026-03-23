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
    <section id="careers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Join Our Team</h2>
          <h3 className="text-4xl font-black text-primary mb-6">Build the Future with Us</h3>
          <p className="text-slate-600">
            We're always looking for talented individuals who are passionate about technology and innovation. Explore our open positions and start your journey with Gmart Online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Open Positions */}
          <div className="space-y-6">
            <h4 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
              <Briefcase className="text-accent" />
              Open Positions
            </h4>
            {positions.map((job, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{job.category}</div>
                    <h5 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{job.title}</h5>
                    <div className="flex gap-4 mt-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CV Submission Form */}
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <h4 className="text-2xl font-black text-primary mb-8">Submit Your CV</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Position Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                  <option value="">Select a position</option>
                  {positions.map((job, idx) => (
                    <option key={idx} value={job.title}>{job.title}</option>
                  ))}
                  <option value="Other">Other / General Application</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Upload CV (PDF/DOCX)</label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-2xl hover:border-accent hover:bg-accent/5 transition-all cursor-pointer group"
                  >
                    <Upload className="w-8 h-8 text-slate-400 group-hover:text-accent mb-2" />
                    <span className="text-sm text-slate-500 group-hover:text-accent">Click to upload or drag and drop</span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Cover Letter / Message</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  placeholder="Tell us why you're a great fit..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-tech-gradient text-white py-4 rounded-xl font-black uppercase tracking-widest hover:shadow-lg hover:shadow-accent/30 transition-all active:scale-[0.98]"
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
