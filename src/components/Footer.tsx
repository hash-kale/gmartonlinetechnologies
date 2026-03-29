import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Twitter, Linkedin, Github, Mail, ArrowRight, Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import { cn } from '../utils/cn';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Our Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Web Solutions', href: '#services' },
      { name: 'AI & Data Science', href: '#services' },
      { name: 'Game Development', href: '#services' },
    ],
    support: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Help Center', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-glow/10 rounded-full blur-[120px] translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 border-b border-slate-800/50 mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Stay ahead of the <span className="text-accent">curve.</span>
            </h3>
            <p className="text-lg text-slate-400 max-w-md">
              Subscribe to our newsletter for the latest tech insights and project updates from Gmart Online.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-accent transition-colors" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/10 transition-all"
              />
            </div>
            <button className="bg-tech-gradient text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transition-all active:scale-95 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-tech-gradient rounded-2xl flex items-center justify-center text-white shadow-xl shadow-accent/20 group-hover:scale-110 transition-all duration-500">
                <Cpu className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter text-white leading-none">
                  GMART ONLINE
                </span>
                <span className="text-[11px] font-black text-accent tracking-[0.3em] uppercase mt-0.5">
                  Technologies
                </span>
              </div>
            </a>
            <p className="text-lg leading-relaxed mb-10 text-slate-400 font-medium">
              Sri Lanka's premier destination for high-end software engineering and digital transformation. We build the future, one line of code at a time.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">+94 11 234 5678</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-accent transition-colors font-bold text-sm uppercase tracking-wider">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-accent transition-colors font-bold text-sm uppercase tracking-wider">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Connect With Us</h4>
            <p className="text-sm text-slate-500 mb-8 font-medium">
              Follow our journey on social media for daily updates, tech tips, and behind-the-scenes looks at our latest innovations.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[11px] font-black uppercase tracking-[0.2em]">
          <p>© {currentYear} Gmart Online (Pvt) Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {footerLinks.support.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
