import React from 'react';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-6">About Us</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 md:mb-10 leading-[1.1]">
              Gmart Online (Pvt) Ltd: Sri Lanka's Tech Revolutionaries
            </h3>
            <div className="space-y-6 md:space-y-8 text-white/70 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              <p>
                Gmart Online (Pvt) Ltd is a Sri Lankan tech company specializing in custom software, mobile apps, game development, and web platforms.
              </p>
              <p>
                We turn ideas into efficient digital products with a focus on quality and user experience. We pride ourselves on understanding our clients' goals and delivering solutions that not only meet but exceed expectations.
              </p>
              <p>
                Join us on our journey to revolutionize the tech space! We aim to deliver solutions that drive growth, streamline processes, and enhance user experiences.
              </p>
            </div>
            <div className="mt-10 md:mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-black text-accent mb-1">5+</div>
                <div className="text-[10px] md:text-sm font-bold text-white/40 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/10" />
              <div>
                <div className="text-4xl md:text-5xl font-black text-accent mb-1">50+</div>
                <div className="text-[10px] md:text-sm font-bold text-white/40 uppercase tracking-widest">Projects Delivered</div>
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl hidden sm:block">
              <div className="text-xl md:text-3xl font-black text-primary mb-2">Innovation First</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Our core philosophy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
