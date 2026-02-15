
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Code, Award } from 'lucide-react';

const metrics = [
  {
    id: 1,
    value: '6+',
    label: 'Years Experience',
    subtext: 'Business & Tech',
    icon: TrendingUp,
    color: 'text-emerald-400'
  },
  {
    id: 2,
    value: '₹2.6M+',
    label: 'Net Revenue',
    subtext: 'Delivered in 33 Weeks',
    icon: Award,
    color: 'text-yellow-400'
  },
  {
    id: 3,
    value: '10+',
    label: 'Global Markets',
    subtext: 'UK, India & More',
    icon: Globe,
    color: 'text-blue-400'
  },
  {
    id: 4,
    value: 'Full',
    label: 'Stack Proficiency',
    subtext: 'MERN + AI Integration',
    icon: Code,
    color: 'text-purple-400'
  }
];

const ImpactMetrics = () => {
  return (
    <section className="py-10 bg-gray-900 border-y border-gray-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-indigo-500/5 blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-3">
                <div className={`p-3 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors ${metric.color}`}>
                  <metric.icon size={24} />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </h3>
              <p className="text-lg font-semibold text-gray-300">{metric.label}</p>
              <p className="text-sm text-gray-500">{metric.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
