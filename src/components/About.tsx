import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">About Us</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">
              Gmart Online (Pvt) Ltd: Sri Lanka's Tech Revolutionaries
            </h3>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
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
            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-white/60">Projects Delivered</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-2xl font-bold">Innovation First</div>
              <div className="text-white/80 text-sm">Our core philosophy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
