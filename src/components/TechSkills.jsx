import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Smartphone, Box, Layers, Globe, Terminal, Cloud, ShieldCheck, Cpu } from 'lucide-react';

const techSkills = [
  {
    category: 'Frontend Engineering',
    skills: [
      'React.js (v18+)', 'Next.js (SSR/SSG)', 'TypeScript', 
      'Tailwind CSS', 'Framer Motion', 'Redux Toolkit', 
      'Zustand', 'React Query', 'Shadcn UI', 'Responsive Design'
    ],
    icon: Layout,
  },
  {
    category: 'Backend Architecture',
    skills: [
      'Node.js (Runtime)', 'Express.js', 'NestJS', 
      'Python (FastAPI)', 'GraphQL', 'RESTful APIs', 
      'WebSockets (Socket.io)', 'Microservices', 'Serverless Functions'
    ],
    icon: Database,
  },
  {
    category: 'Database & Storage',
    skills: [
      'PostgreSQL', 'MongoDB (Atlas)', 'Supabase (BaaS)', 
      'Redis (Caching)', 'Firebase', 'Prisma ORM', 
      'Mongoose', 'Amazon S3 (Storage)', 'Vector DBs (Pinecone)'
    ],
    icon: Layers,
  },
  {
    category: 'AI & LLM Integration',
    skills: [
      'OpenAI API', 'Anthropic Claude API', 'LangChain', 
      'Prompt Engineering', 'RAG Pipelines', 'n8n Workflows', 
      'Hugging Face', 'Microsoft Copilot Studio', 'Fine-tuning Models'
    ],
    icon: Cpu,
  },
  {
    category: 'DevOps & Cloud Infrastructure',
    skills: [
      'Docker & Kubernetes', 'AWS (EC2, Lambda)', 'Vercel / Netlify', 
      'CI/CD Pipelines (GitHub Actions)', 'Cloudflare', 
      'Nginx', 'Terraform (IaC)', 'Monitoring (Datadog/Sentry)'
    ],
    icon: Cloud,
  },
  {
    category: 'Security & Authentication',
    skills: [
      'OAuth 2.0 / JWT', 'Clerk Auth', 'NextAuth.js', 
      'Role-Based Access Control (RBAC)', 'Stripe Payment Integration', 
      'OWASP Security Practices', 'Data Encryption'
    ],
    icon: ShieldCheck,
  },
  {
    category: 'Developer Tools & IDEs',
    skills: [
      'VS Code', 'Cursor (AI Editor)', 'Trae IDE', 
      'GitHub Copilot', 'Postman / Insomnia', 'Figma (Design Handoff)', 
      'Git & GitHub', 'Jira / Linear', 'Codeium'
    ],
    icon: Terminal,
  }
];

const capabilities = [
  {
    title: 'Enterprise Grade Systems',
    description: 'Building robust, scalable platforms like "Remotehive" with complex architecture and security.',
    icon: Globe,
  },
  {
    title: 'AI-Powered Applications',
    description: 'Integrating custom AI chat models with guardrails, context awareness, and automated workflows.',
    icon: Layers,
  },
  {
    title: 'Full Stack Admin Panels',
    description: 'Developing dynamic admin dashboards with real-time data, analytics, and content management.',
    icon: Smartphone,
  },
];

const TechSkills = () => {
  return (
    <section id="tech-skills" className="py-20 bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-indigo-400"
        >
          Coding Proficiency & Tools
        </motion.h2>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techSkills.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-900/30 rounded-lg text-indigo-400">
                  <section.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white">{section.category}</h3>
              </div>
              <ul className="space-y-3">
                {section.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          What I Can Build
        </motion.h3>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:bg-gray-800 transition-all text-center group"
            >
              <div className="inline-block p-4 bg-indigo-600 rounded-full text-white mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
