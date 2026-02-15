import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const biography = [
  "My professional journey is rooted in a strong academic foundation in Computer Science from Rajiv Gandhi Govt. P.G. College, Ambikapur. Starting my career as a Service Coordinator at Livpure, I quickly transitioned into high-impact sales roles.",
  "At WhiteHat Jr, I was recognized as a Star Performer, achieving record-breaking organic revenue growth. My journey continued through dynamic roles at Apna.co and Swiggy Dineout, where I honed my skills in B2B sales and account management.",
  "Currently, as a Team Leader at PlanetSpark, I drive end-to-end P&L ownership and lead high-performing inside sales teams, consistently achieving 15x monthly revenue multiples.",
  "I combine my sales expertise with a deep understanding of technology, leveraging AI and data analytics to drive business growth and operational efficiency."
];

const achievements = [
  {
    title: 'Star Performer Award',
    description: 'Recognized at WhiteHat Jr for highest revenue contribution and record-breaking organic growth.',
    icon: Award
  },
  {
    title: '15x Revenue Multiple',
    description: 'Consistently achieving 15x monthly revenue multiple at PlanetSpark through strategic P&L management.',
    icon: TrendingUp
  },
  {
    title: '₹2.6M+ Net Revenue Delivered',
    description: 'Generated ₹26,15,976.09 in New Net Revenue within 33 weeks at PlanetSpark, leading a team of 8.',
    icon: Award
  },
  {
    title: 'High Conversion Rates',
    description: 'Delivered strong trial-to-enrollment conversion rates in the UK market at Bhanzu.',
    icon: CheckCircle
  },
  {
    title: 'Retention & Growth',
    description: 'Consistently exceeded revenue and retention targets at Swiggy Dineout.',
    icon: Users
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Biography Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-indigo-400"
          >
            Personal Biography & Journey
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {biography.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-indigo-500"
              >
                <p className="text-gray-300 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-indigo-400"
        >
          Goals & Achievements
        </motion.h2>

        <div className="space-y-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
                  <item.icon size={32} className="text-white" />
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-indigo-500 hover:transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
