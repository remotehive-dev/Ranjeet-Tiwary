import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImpactMetrics from './components/ImpactMetrics';
import Skills from './components/Skills';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import WorkJourney from './components/WorkJourney';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <About />
      <TechSkills />
      <Projects />
      <WorkJourney />
      <Education />
      <Certificates />
      <Skills />
      <Experience />
      <Contact />
      <footer className="py-8 bg-gray-950 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ranjeet Tiwary. All rights reserved.</p>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
