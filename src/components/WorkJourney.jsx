import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, X, Building2 } from 'lucide-react';

const workHistory = [
  {
    id: 1,
    company: 'PlanetSpark',
    role: 'Team Leader – Inside Sales',
    duration: 'Jun 2025 – Present',
    logo: null,
    color: 'from-purple-600 to-pink-600',
    details: {
      overview: 'Owning end-to-end P&L and leading inside sales teams to drive revenue growth.',
      responsibilities: [
        'Own end-to-end P&L for the assigned business vertical, consistently achieving a 15× monthly revenue multiple.',
        'Lead hiring, onboarding, training, and performance management of inside sales teams.',
        'Drive CRM hygiene, forecasting accuracy, and analytics-led pipeline optimization.',
        'Collaborate cross-functionally with marketing, product, and training teams to improve lead quality.',
        'Standardized lead-to-lead (L2L) processes, increasing efficiency and referral-driven growth.'
      ],
      achievements: [
        'Delivered Net Revenue of ₹26,15,976.09 (New Net) in just 33 weeks as Assistant Manager - TL.',
        'Managed a high-performing team of 8 members to achieve consistent targets.',
        'Revenue calculation accounts for all deductions: Teacher Cost, Subvention Amount, and GST.'
      ],
      talentReview: '/assets/planetspark-talent-review.pdf',
      teamPerformance: '/assets/performance-dashboard.png'
    }
  },
  {
    id: 2,
    company: 'Bhanzu',
    role: 'Sales Manager – International Market',
    duration: 'Aug 2024 – Jun 2025',
    logo: null,
    color: 'from-blue-500 to-cyan-500',
    details: {
      overview: 'Managed UK market inside sales operations and optimized lead conversion.',
      responsibilities: [
        'Managed UK market inside sales operations, handling high-intent inbound and outbound leads.',
        'Oversaw CRM data integrity, reporting, and forecasting.',
        'Delivered consultative sales engagements with strong trial-to-enrollment conversion.',
        'Partnered with cross-functional teams to optimize lead nurturing and reduce drop-offs.'
      ],
      achievements: []
    }
  },
  {
    id: 3,
    company: 'Swiggy Dineout',
    role: 'Account Manager',
    duration: 'Oct 2023 – Apr 2024',
    logo: null,
    color: 'from-orange-500 to-yellow-500',
    details: {
      overview: 'Managed and scaled a portfolio of restaurant partners through consultative selling.',
      responsibilities: [
        'Managed and scaled a portfolio of restaurant partners through consultative selling.',
        'Acted as a strategic advisor by analyzing sales trends and implementing growth initiatives.',
        'Consistently exceeded revenue and retention targets.'
      ],
      achievements: []
    }
  },
  {
    id: 4,
    company: 'Apna.co',
    role: 'Inside Sales Associate',
    duration: 'Jun 2022 – May 2023',
    logo: null,
    color: 'from-green-500 to-emerald-500',
    details: {
      overview: 'Converted B2B leads into revenue-generating accounts.',
      responsibilities: [
        'Converted cold and warm B2B leads into revenue-generating accounts.',
        'Exceeded KPIs through disciplined pipeline management and consultative selling.',
        'Improved onboarding efficiency via process-level improvements.'
      ],
      achievements: []
    }
  },
  {
    id: 5,
    company: 'WhiteHat Jr',
    role: 'Manager – Sales',
    duration: 'Nov 2020 – Jun 2022',
    logo: '/assets/whitehat-certificate.webp',
    color: 'from-red-500 to-pink-500',
    details: {
      overview: 'Led high-performing sales teams and achieved record-breaking revenue growth.',
      responsibilities: [
        'Led and mentored high-performing sales teams with structured KPIs.',
        'Achieved record-breaking organic revenue growth.'
      ],
      achievements: [
        'Recognized as Star Performer for highest revenue contribution.'
      ]
    }
  },
  {
    id: 6,
    company: 'Livpure Private Limited',
    role: 'Service Coordinator',
    duration: 'Jan 2019 – Dec 2019',
    logo: null,
    color: 'from-blue-600 to-indigo-600',
    details: {
      overview: 'Managed service engineers and ensured complaint resolution within SLA.',
      responsibilities: [
        'Managed service engineers and ensured complaint resolution within SLA/TAT.',
        'Optimized service workflows, improving operational efficiency and customer satisfaction.'
      ],
      achievements: []
    }
  }
];

const WorkJourney = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section id="work-journey" className="py-20 bg-gray-900 text-white relative min-h-screen flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-20 text-center text-indigo-400"
        >
          Professional Journey
        </motion.h2>

        {/* 3D Timeline Layout */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 perspective-1000">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent -translate-y-1/2 opacity-30" />

          {workHistory.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
              onClick={() => setSelectedJob(job)}
              className={`
                relative w-full md:w-80 h-96 rounded-2xl cursor-pointer 
                bg-gradient-to-br ${job.color} p-1 shadow-2xl 
                transform transition-all duration-500 hover:shadow-indigo-500/30
                group
              `}
            >
              <div className="bg-gray-900 h-full w-full rounded-xl p-6 flex flex-col justify-between overflow-hidden relative">
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${job.color} opacity-10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity group-hover:opacity-20`} />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <Building2 size={24} className="text-white" />
                    </div>
                    <span className="text-xs font-mono text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700">
                      {job.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {job.company}
                  </h3>
                  <p className="text-indigo-400 font-medium mb-4">{job.role}</p>
                </div>

                <div className="mt-auto">
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {job.details.overview}
                  </p>
                  <button className="flex items-center text-sm font-semibold text-white group-hover:translate-x-2 transition-transform">
                    View Details <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gray-900 w-full max-w-2xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedJob.color} p-8 relative`}>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedJob.company}</h3>
                <p className="text-white/90 text-lg">{selectedJob.role}</p>
                <div className="flex items-center gap-2 mt-4 text-white/80 text-sm">
                  <Calendar size={16} />
                  <span>{selectedJob.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 max-h-[60vh] overflow-y-auto">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                    <Briefcase size={20} /> Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedJob.details.overview}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {selectedJob.details.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-gray-400 text-sm">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Achievements</h4>
                    <ul className="space-y-3">
                      {selectedJob.details.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start text-gray-400 text-sm">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                    {selectedJob.details.talentReview && (
                      <div className="mt-6 space-y-6">
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">Talent Review Dashboard</h5>
                          <div className="w-full h-48 bg-white rounded-lg overflow-hidden border border-gray-700 relative group">
                            <iframe
                              src={`${selectedJob.details.talentReview}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                              className="w-full h-full border-none pointer-events-none"
                              title="Talent Review Dashboard"
                              loading="lazy"
                            />
                            <a
                              href={selectedJob.details.talentReview}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <span className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                                View Full Report <ChevronRight size={14} />
                              </span>
                            </a>
                          </div>
                        </div>

                        {selectedJob.details.teamPerformance && (
                          <div>
                            <h5 className="text-sm font-semibold text-white mb-2">Team Performance Dashboard</h5>
                            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 relative group">
                              <img
                                src={selectedJob.details.teamPerformance}
                                alt="Team Performance Dashboard"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                  onClick={() => window.open(selectedJob.details.teamPerformance, '_blank')}
                                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                                >
                                  View Full Dashboard <ChevronRight size={14} />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkJourney;
