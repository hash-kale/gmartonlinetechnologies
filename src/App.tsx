import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Careers } from './components/Careers';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Services />
        <Projects />
        <Gallery />
        <Careers />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
