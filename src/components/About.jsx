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
                <span className="text-indigo-300 font-semibold">The Bridge Between Business & Technology.</span>
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I am a results-driven Business Development and Sales Leader with a <span className="text-white font-medium">B.Sc. in Computer Science</span> and over 6 years of experience scaling revenue for top-tier EdTech and SaaS companies. My journey began in the technical realm, managing operations for a tech franchise, before pivoting to sales where I consistently outperformed targets, earning accolades like <span className="text-yellow-400 font-medium">"Star Performer"</span> at WhiteHat Jr and driving a <span className="text-emerald-400 font-medium">15x revenue multiple</span> at PlanetSpark.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Unlike traditional sales professionals, I speak the language of code. I possess a deep, hands-on understanding of <span className="text-indigo-300 font-medium">Full Stack Development (MERN)</span>, API architecture, and database design. I build enterprise-grade systems like "Remotehive," integrate complex AI models with guardrails, and deploy scalable solutions on cloud infrastructure.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                This unique duality allows me to not only sell complex technological solutions but to understand their architecture, optimize their delivery, and bridge the gap between technical capabilities and business objectives. I don't just close deals; I architect sustainable growth strategies backed by data and technical precision.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">The Techno-Commercial Advantage</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-start group">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors"></span>
                  <div>
                    <strong className="text-white block mb-1">Strategic Revenue Growth</strong>
                    <span>Proven track record of scaling P&L and driving double-digit growth in international markets (UK/India).</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></span>
                  <div>
                    <strong className="text-white block mb-1">Full Stack Engineering</strong>
                    <span>Building robust applications with React, Node.js, MongoDB, and modern DevOps practices.</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                  <div>
                    <strong className="text-white block mb-1">AI & Automation Mastery</strong>
                    <span>Leveraging n8n, custom AI agents, and LLMs to automate workflows and enhance productivity.</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors"></span>
                  <div>
                    <strong className="text-white block mb-1">Data-Driven Leadership</strong>
                    <span>Using advanced analytics (Power BI, CRM data) to forecast trends and optimize sales funnels.</span>
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
