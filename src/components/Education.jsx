
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    id: 1,
    institution: 'University of the People',
    degree: 'Associate Degree in Data Science',
    duration: '2025 - 2026',
    status: 'Pursuing',
    details: 'UoPeople ID: C110418561',
    description: 'Coursework focus: statistics, data analysis, SQL-ready thinking, machine learning foundations, and applied problem-solving for business decision-making.',
    icon: BookOpen,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    institution: 'Rajiv Gandhi Govt. P.G. College, Ambikapur',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2016 - 2019',
    status: 'Completed',
    details: '',
    description: 'Foundation in computer science, programming, and software engineering concepts—supporting product thinking, technical discovery, and cross-functional collaboration.',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-600'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-indigo-400"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all hover:shadow-xl hover:shadow-indigo-500/10 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />
              
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color} shadow-lg`}>
                  <edu.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                  <p className="text-indigo-400 font-medium">{edu.degree}</p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={16} className="text-indigo-500" />
                  <span>{edu.duration}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${edu.status === 'Pursuing' ? 'bg-indigo-900/50 text-indigo-300' : 'bg-emerald-900/50 text-emerald-300'}`}>
                    {edu.status}
                  </span>
                </div>
                
                {edu.details && (
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Award size={16} className="text-indigo-500" />
                    <span>{edu.details}</span>
                  </div>
                )}

                <p className="text-gray-300 leading-relaxed mt-4">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
