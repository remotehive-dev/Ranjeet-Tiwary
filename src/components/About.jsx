import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-indigo-400">About Me</h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                <span className="text-indigo-300 font-semibold">A techno-commercial leader building predictable revenue engines.</span>
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I am a Business Development and Inside Sales leader with a <span className="text-white font-medium">B.Sc. in Computer Science</span> and 6+ years of experience driving revenue growth across high-velocity EdTech and consumer-tech environments. I’ve owned P&L, built and coached inside sales teams, improved funnel conversion, and delivered measurable outcomes including <span className="text-emerald-400 font-medium">₹26,15,976.09 in New Net Revenue in 33 weeks</span> while leading an 8-member team at PlanetSpark.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                My edge is execution across both business and technology. I combine consultative selling (discovery, objection handling, negotiation, closing, expansion) with practical engineering literacy across <span className="text-indigo-300 font-medium">React, Node.js, APIs, databases, analytics, and automation</span>. This helps me align product value with customer pain points, translate technical capabilities into business outcomes, and accelerate decision-making with data.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I focus on building repeatable playbooks: qualification standards, pipeline hygiene, forecasting cadence, and performance coaching that improves both conversion and retention. The result is a revenue system that scales with the team—clear process, clear metrics, and customer-first execution.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">The Techno-Commercial Advantage</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-start group">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors"></span>
                  <div>
                    <strong className="text-white block mb-1">Strategic Revenue Growth</strong>
                    <span>P&L ownership, quota achievement, and market expansion with a structured revenue cadence (pipeline, conversion, retention).</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></span>
                  <div>
                    <strong className="text-white block mb-1">Sales Ops + Tech Fluency</strong>
                    <span>CRM hygiene, dashboards, forecasting, and process automation with strong product/engineering collaboration.</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                  <div>
                    <strong className="text-white block mb-1">High-Performance Team Leadership</strong>
                    <span>Hiring, onboarding, coaching, QA, and performance management for inside sales teams in high-velocity funnels.</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors"></span>
                  <div>
                    <strong className="text-white block mb-1">Data-Driven Leadership</strong>
                    <span>Analytics-led decisions using KPI dashboards, cohort insights, and funnel reviews to improve conversion and predictability.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-800 p-2 rounded-2xl ring-1 ring-gray-900/5 shadow-xl">
              <img
                src="/assets/skill-nation-laptop.webp"
                alt="Profile"
                className="w-full h-auto object-cover object-center rounded-xl shadow-2xl transition-all duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-sm p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">
                  "Driven by innovation, powered by technology."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
