import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const biography = [
  "I bring a strong technical foundation (B.Sc. Computer Science) and a commercial mindset built through 6+ years in high-velocity sales environments. My career started in customer-facing operations at Livpure, where I learned SLA management, escalation handling, and process discipline—skills that later translated into tighter pipeline execution and stronger customer experience.",
  "I moved into inside sales leadership roles where consultative selling and structured follow-ups matter most: lead qualification, discovery, objection handling, negotiation, closing, and post-sale expansion. At WhiteHat Jr, I was recognized as a Star Performer for high revenue contribution and consistent performance against aggressive targets.",
  "I strengthened my B2B selling and account management capabilities across roles at Apna.co and Swiggy Dineout—working with decision-makers, improving onboarding and adoption, and executing retention and growth initiatives through data-backed partner reviews.",
  "At PlanetSpark, I take end-to-end ownership of performance: P&L, team hiring and coaching, forecasting cadence, and CRM hygiene. I’ve led an 8-member team and delivered ₹26,15,976.09 in New Net Revenue in 33 weeks while maintaining an execution rhythm that supports repeatable growth.",
  "Across roles, I use analytics and automation to scale impact—KPI dashboards, funnel reviews, and AI-enabled workflows that reduce manual effort and improve speed-to-lead, conversion, and predictability."
];

const achievements = [
  {
    title: 'Star Performer Award',
    description: 'Recognized at WhiteHat Jr for high revenue contribution and consistent quota delivery, driven by disciplined pipeline management and consultative selling.',
    icon: Award
  },
  {
    title: '15x Revenue Multiple',
    description: 'Owned P&L and execution cadence at PlanetSpark, driving a 15× monthly revenue multiple through forecasting, funnel optimization, and team coaching.',
    icon: TrendingUp
  },
  {
    title: '₹2.6M+ Net Revenue Delivered',
    description: 'Generated ₹26,15,976.09 in New Net Revenue within 33 weeks at PlanetSpark while leading an 8-member inside sales team and maintaining CRM hygiene for accurate reporting.',
    icon: Award
  },
  {
    title: 'High Conversion Rates',
    description: 'Delivered strong trial-to-enrollment conversion in the UK market at Bhanzu by improving discovery quality, follow-up cadence, and stakeholder alignment.',
    icon: CheckCircle
  },
  {
    title: 'Retention & Growth',
    description: 'Exceeded revenue and retention targets at Swiggy Dineout through partner reviews, adoption playbooks, and growth initiatives informed by performance data.',
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
