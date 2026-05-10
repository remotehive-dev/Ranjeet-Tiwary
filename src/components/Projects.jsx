import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Code, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Remotehive',
    category: 'Enterprise Grade System',
    description: 'A scalable platform concept for remote work operations with secure authentication, role-based access, and real-time collaboration—built to demonstrate enterprise architecture and product thinking.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Socket.io'],
    features: [
      'Role-based access control (RBAC) and secure authentication flows',
      'Real-time collaboration patterns using event-driven updates',
      'Scalable data model for teams, projects, and activity history',
      'Cloud-ready asset storage and performance-focused UI'
    ],
    icon: Globe,
    link: '#', 
  },
  {
    title: 'Dynamic Admin Panels',
    category: 'Full Stack Dashboard',
    description: 'Production-style admin dashboards with modular UI, user management, and analytics views—built to highlight sales ops mindset (metrics, governance, and operational control).',
    tech: ['React', 'Supabase/Appwrite', 'Tailwind CSS', 'Recharts'],
    features: [
      'Modular content and user management with role-based permissions',
      'Authentication and secure access patterns for internal tooling',
      'Operational analytics views and reporting-ready data layouts',
      'Responsive UI with motion-driven interactions'
    ],
    icon: Server,
    link: '#',
  },
  {
    title: 'AI Chat Integration',
    category: 'AI & Automation',
    description: 'LLM-enabled chat experiences integrated into web apps with safety guardrails, context controls, and resilient UX—focused on reliable, production-grade AI interaction.',
    tech: ['OpenAI/Claude API', 'n8n', 'Vector DB', 'React'],
    features: [
      'Context-aware prompting patterns and response quality controls',
      'Guardrails, error boundaries, and fallback handling for stability',
      'RAG-ready workflow concepts with embeddings/vector search',
      'Automation pipelines for repetitive workflows using n8n'
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
