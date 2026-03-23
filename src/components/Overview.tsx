import React from 'react';
import { Code2 } from 'lucide-react';

export const Overview = () => {
  return (
    <section id="overview" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-end">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-slate-500 text-sm">Quality Focus</div>
                </div>
                <div className="h-64 bg-tech-gradient rounded-2xl shadow-lg p-6 flex flex-col justify-end text-white">
                  <div className="text-3xl font-black">Custom</div>
                  <div className="text-white/80 text-sm font-bold uppercase tracking-wider">Software Solutions</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-primary rounded-2xl shadow-lg p-6 flex flex-col justify-end text-white">
                  <div className="text-3xl font-black">AI</div>
                  <div className="text-white/80 text-sm font-bold uppercase tracking-wider">Powered Projects</div>
                </div>
                <div className="h-48 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-end">
                  <div className="text-3xl font-bold">Global</div>
                  <div className="text-slate-500 text-sm">Client Reach</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Overview</h2>
            <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
              Empowering Businesses Through Cutting-Edge Digital Solutions
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Gmart Online Technologies, we specialize in developing cutting-edge digital solutions to help businesses thrive in a technology-driven world. From mobile applications to web and desktop apps, and AI-powered projects, we offer a wide range of custom software development services.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With a focus on innovation, quality, and user-centric design, we aim to deliver solutions that drive growth, streamline processes, and enhance user experiences.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent">
                <Code2 />
              </div>
              <div>
                <div className="font-bold text-primary">Expert Team</div>
                <div className="text-slate-500 text-sm">Skilled developers & designers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
