import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All','Web Development' , 'SaaS Development', 'Mobile Game Development', 'App Development'];

  const projects = [
    {
      title: "Forex Trading Platform",
      category: "SaaS Development",
      image: "https://lgwrc9xwufcexfj4.public.blob.vercel-storage.com/Projects-images/project-01-Invesyn%20%281%29.png",
      desc: "Invesyn is a forex-first intelligence platform building skilled, disciplined traders through strategic training and long-term investment thinking."
    },
    {
      title: "Gaming Platform",
      category: "Web Development",
      image: "https://lgwrc9xwufcexfj4.public.blob.vercel-storage.com/Projects-images/project-02-Jaya9web.png",
      desc: "Elevate your experience with interactive mini-games and fortune wheels—where every play earns prizes and a chance at the top of the leaderboard."
    },
    {
      title: "Omi4 Mobile Game",
      category: "Mobile Game Development",
      image: "https://lgwrc9xwufcexfj4.public.blob.vercel-storage.com/Projects-images/project-03-Omi4_mobile-game.png",
      desc: "Experience the authentic Sri Lankan classic with Omi4: a vibrant, multiplayer mobile card game featuring seamless gameplay and global competition."
    },
    {
      title: "Ludo-Arena Mobile Game",
      category: "Mobile Game Development",
      image: "https://lgwrc9xwufcexfj4.public.blob.vercel-storage.com/Projects-images/project-04-ludoarena_mobile-game.png",
      desc: "Experience the ultimate multiplayer board game: a strategic, mind-refreshing classic to enjoy with friends and family anytime."
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8 md:gap-10">
          <div className="max-w-3xl">
            <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-6">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-black text-primary mb-6 md:mb-8">Our Recent Projects</h3>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Take a look at some of the digital products we've built for our clients across various industries.
            </p>
          </div>
          <a href="#" className="text-accent font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all group shrink-0">
            View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-black transition-all border uppercase tracking-widest",
                activeFilter === cat 
                  ? "bg-tech-gradient text-white border-transparent shadow-xl shadow-accent/30 scale-105" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-accent hover:text-accent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="text-[10px] md:text-xs font-black text-accent uppercase tracking-[0.2em] mb-4">{project.category}</div>
                  <h4 className="text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">{project.title}</h4>
                  <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">{project.desc}</p>
                  <a href="#" className="inline-flex items-center gap-3 text-primary font-black text-sm uppercase tracking-widest hover:text-accent transition-colors group/link">
                    Case Study <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
