import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Code, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Remotehive',
    category: 'Enterprise Grade System',
    description: 'A scalable, enterprise-level platform designed for remote work management. Features robust architecture, secure authentication, and real-time collaboration tools.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Socket.io'],
    features: [
      'Enterprise-grade architecture',
      'Real-time collaboration workflows',
      'Scalable database design',
      'Secure role-based access control'
    ],
    icon: Globe,
    link: '#', 
  },
  {
    title: 'Dynamic Admin Panels',
    category: 'Full Stack Dashboard',
    description: 'Fully functional admin panels with dynamic content management, user administration, and analytics visualization.',
    tech: ['React', 'Supabase/Appwrite', 'Tailwind CSS', 'Recharts'],
    features: [
      'Dynamic content management',
      'User authentication (Clerk)',
      'Database integration (Supabase/Mongo)',
      'Responsive UI with Framer Motion'
    ],
    icon: Server,
    link: '#',
  },
  {
    title: 'AI Chat Integration',
    category: 'AI & Automation',
    description: 'Custom AI chat models integrated into web apps with guardrails, error boundaries, and context-aware responses.',
    tech: ['OpenAI/Claude API', 'n8n', 'Vector DB', 'React'],
    features: [
      'Custom AI model integration',
      'Guardrails & Error Boundaries',
      'Context-aware prompting',
      'Automated workflows via n8n'
    ],
    icon: Code,
    link: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-indigo-400"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-900/30 rounded-lg text-indigo-400">
                    <project.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-indigo-400 font-medium">{project.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <Shield size={16} className="text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-8 pb-8 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
