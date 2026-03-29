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
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-6">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-primary mb-8">Services We Offer</h3>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            We offer a wide range of custom software development services to cater to the unique needs of our clients.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12 }}
              className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className={cn("w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 shadow-sm group-hover:scale-110 transition-transform duration-500", service.color)}>
                <div className="scale-90 md:scale-100">{service.icon}</div>
              </div>
              <h4 className="text-xl md:text-2xl font-black text-primary mb-4 md:mb-6 tracking-tight">{service.title}</h4>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
