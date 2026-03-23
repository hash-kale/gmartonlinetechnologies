import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Code2, Gamepad2, Cpu, Palette, Headphones } from 'lucide-react';
import { cn } from '../utils/cn';

export const Services = () => {
  const services = [
    {
      title: 'Mobile App Development',
      desc: 'We create custom Android and iOS applications with smooth performance and modern design.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Web Development',
      desc: 'Responsive, fast, and user-friendly websites built to represent your brand and grow your business.',
      icon: <Code2 className="w-8 h-8" />,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Game Development',
      desc: 'Engaging and interactive mobile games for entertainment, education, or promotion.',
      icon: <Gamepad2 className="w-8 h-8" />,
      color: 'bg-orange-50 text-orange-600'
    },
    {
      title: 'Custom Software Solutions',
      desc: 'Tailored software systems and tools to automate and manage your business operations efficiently.',
      icon: <Cpu className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'UI/UX Design',
      desc: 'Clean, intuitive, and attractive designs focused on user experience and functionality.',
      icon: <Palette className="w-8 h-8" />,
      color: 'bg-pink-50 text-pink-600'
    },
    {
      title: 'Tech Consultation & Support',
      desc: 'Expert advice, ongoing maintenance, and dedicated support for your digital projects.',
      icon: <Headphones className="w-8 h-8" />,
      color: 'bg-slate-100 text-slate-600'
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-primary mb-6">Services We Offer</h3>
          <p className="text-slate-600">
            We offer a wide range of custom software development services to cater to the unique needs of our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm", service.color)}>
                {service.icon}
              </div>
              <h4 className="text-xl font-black text-primary mb-4 tracking-tight">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
