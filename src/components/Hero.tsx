import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Code2, Cpu, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-24 overflow-hidden min-h-[100vh] flex items-center bg-grid-pattern">
      {/* Futuristic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-glow/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-accent text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] mb-8 md:mb-10 border border-accent/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            Sri Lanka's Premier Tech Hub
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary leading-[0.9] mb-8 md:mb-10 tracking-tighter">
            We build <br />
            <span className="text-gradient italic">great</span> tech!
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            We build powerful apps, websites, games, and custom systems to help you grow and succeed in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6">
            <a
              href="#services"
              className="bg-tech-gradient text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-accent/40 transition-all flex items-center justify-center gap-3 group"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#about"
              className="bg-white text-primary border-2 border-slate-100 px-8 md:px-12 py-5 md:py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm text-center"
            >
              About Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-[500px] mx-auto">
            {/* Logo Re-creation Visual */}
            <div className="absolute inset-0 bg-tech-gradient rounded-[4rem] opacity-10 animate-pulse" />
            <div className="absolute inset-4 border-2 border-accent/20 rounded-[3.5rem] border-dashed animate-[spin_20s_linear_infinite]" />
            
            <div className="absolute inset-10 bg-white rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden border border-slate-100">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute inset-0 bg-tech-gradient opacity-10 rounded-full blur-3xl animate-pulse" />
                <Cpu className="w-32 h-32 text-accent relative z-10" />
                <div className="absolute -bottom-4 font-black text-primary tracking-[0.3em] text-xs opacity-50">
                  INNOVATING
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-5 rounded-3xl shadow-xl border border-slate-50"
            >
              <Smartphone className="text-accent w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white p-5 rounded-3xl shadow-xl border border-slate-50"
            >
              <Code2 className="text-cyan-glow w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
