import React from 'react';
import { Code2 } from 'lucide-react';

export const Overview = () => {
  return (
    <section id="overview" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="min-h-[14rem] bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col justify-end">
                  <div className="text-4xl font-black text-primary mb-1">100%</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Quality Focus</div>
                </div>
                <div className="min-h-[18rem] bg-tech-gradient rounded-3xl shadow-lg p-8 flex flex-col justify-end text-white">
                  <div className="text-4xl font-black mb-1">Custom</div>
                  <div className="text-white/80 text-sm font-bold uppercase tracking-wider">Software Solutions</div>
                </div>
              </div>
              <div className="space-y-6 sm:pt-12">
                <div className="min-h-[18rem] bg-primary rounded-3xl shadow-lg p-8 flex flex-col justify-end text-white">
                  <div className="text-4xl font-black mb-1">AI</div>
                  <div className="text-white/80 text-sm font-bold uppercase tracking-wider">Powered Projects</div>
                </div>
                <div className="min-h-[14rem] bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col justify-end">
                  <div className="text-4xl font-black text-primary mb-1">Global</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Client Reach</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-6">Overview</h2>
            <h3 className="text-4xl md:text-6xl font-black text-primary mb-8 md:mb-10 leading-[1.1]">
              Empowering Businesses Through Cutting-Edge Digital Solutions
            </h3>
            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed font-medium">
              At Gmart Online Technologies, we specialize in developing cutting-edge digital solutions to help businesses thrive in a technology-driven world. From mobile applications to web and desktop apps, and AI-powered projects, we offer a wide range of custom software development services.
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 leading-relaxed font-medium">
              With a focus on innovation, quality, and user-centric design, we aim to deliver solutions that drive growth, streamline processes, and enhance user experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-accent shadow-inner shrink-0">
                <Code2 className="w-8 h-8" />
              </div>
              <div>
                <div className="text-lg font-black text-primary">Expert Team</div>
                <div className="text-slate-500 font-medium">Skilled developers & designers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
