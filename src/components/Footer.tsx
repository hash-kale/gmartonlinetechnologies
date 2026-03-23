import React from 'react';
import { Cpu, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-tech-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
                <Cpu className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-primary leading-none">
                  GMART ONLINE
                </span>
                <span className="text-[11px] font-bold text-accent tracking-[0.2em] uppercase">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
              Revolutionizing the tech space with innovation, quality, and user-centric design. Sri Lanka's leading custom software development partner.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-blue-50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-blue-50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-blue-50 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#overview" className="hover:text-accent transition-colors">Overview</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#careers" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-accent transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Web Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AI Projects</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Game Dev</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2026 Gmart Online (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
