import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      desc: "A full-featured online store with inventory management and secure payments."
    },
    {
      title: "Fitness Tracker App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80",
      desc: "Real-time activity tracking and health monitoring for active users."
    },
    {
      title: "Educational RPG Game",
      category: "Game Development",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      desc: "An interactive learning experience through gamified challenges."
    },
    {
      title: "Inventory Management System",
      category: "Custom Software",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      desc: "Streamlined logistics and stock tracking for large-scale operations."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">Our Recent Projects</h3>
            <p className="text-slate-600">
              Take a look at some of the digital products we've built for our clients across various industries.
            </p>
          </div>
          <a href="#" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Projects <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{project.category}</div>
                <h4 className="text-2xl font-bold text-primary mb-3">{project.title}</h4>
                <p className="text-slate-600 mb-6">{project.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                  Case Study <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
