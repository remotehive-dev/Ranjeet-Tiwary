import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Cpu, Target, ShieldCheck } from 'lucide-react';

const skills = [
  {
    title: 'Business Development',
    icon: Briefcase,
    description: 'Driving growth through strategic partnerships and market expansion.',
  },
  {
    title: 'Sales Strategy',
    icon: TrendingUp,
    description: 'Crafting effective sales plans to maximize revenue and market share.',
  },
  {
    title: 'Client Relations',
    icon: Users,
    description: 'Building and maintaining strong, long-lasting customer relationships.',
  },
  {
    title: 'CRM & Tech Tools',
    icon: Cpu,
    description: 'Leveraging modern CRM systems and AI tools for efficiency.',
  },
  {
    title: 'Market Analysis',
    icon: Target,
    description: 'In-depth analysis of market trends and competitor activities.',
  },
  {
    title: 'Strategic Planning',
    icon: ShieldCheck,
    description: 'Long-term planning to ensure sustainable business success.',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-indigo-400"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all border border-gray-700"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-indigo-900/50 rounded-full text-indigo-400">
                  <skill.icon size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
