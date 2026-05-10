import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, ExternalLink, Award } from 'lucide-react';

const certificates = [
  {
    title: 'AI Masterclass',
    issuer: 'Freedom With AI',
    image: '/assets/freedom-with-ai-cert.pdf', // Using PDF as source for link
    description: "I have successfully completed the Freedom with AI Masterclass, gaining valuable insights into the world of artificial intelligence. This course provided a strong foundation in understanding AI's impact on various industries and how to leverage it for innovation. I'm excited to apply these new skills and continue growing in this rapidly evolving field.",
    link: '/assets/freedom-with-ai-cert.pdf',
    type: 'pdf',
    issuerUrl: 'https://www.linkedin.com/company/freedomwithai/'
  },
  {
    title: 'Microsoft Copilot Certification',
    issuer: 'Skill Nation',
    image: '/assets/microsoft-copilot-cert.pdf',
    description: 'Certified expertise in using Microsoft Copilot for productivity and business solutions.',
    link: '/assets/microsoft-copilot-cert.pdf',
    type: 'pdf',
    issuerUrl: 'https://www.linkedin.com/company/skillnationonline/'
  },
  {
    title: 'AI & Generative Tools',
    issuer: 'Skill Nation',
    image: '/assets/skill-nation-ai.webp',
    description: 'Comprehensive workshop on Microsoft Copilot, Google Gemini & Claude AI.',
    link: '/assets/skill-nation-ai.webp',
    type: 'image',
    issuerUrl: 'https://www.linkedin.com/company/skillnationonline/'
  },
  {
    title: 'Power BI Micro Course',
    issuer: 'SkillCourse',
    image: '/assets/power-bi-cert.pdf',
    description: 'Professional certification in data visualization and business intelligence using Power BI.',
    link: '/assets/power-bi-cert.pdf',
    type: 'pdf',
    issuerUrl: 'https://www.linkedin.com/company/skill-course/'
  },
  {
    title: 'Star Performer (Sales)',
    issuer: 'WhiteHat Jr',
    image: '/assets/whitehat-cert.pdf',
    description: 'Recognized as Star Performer and Highest Revenue Generator in the entire organization.',
    link: '/assets/whitehat-cert.pdf',
    type: 'pdf'
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic Education',
    image: '/assets/claude-101-cert.pdf',
    description: 'Completed Claude 101 with verified certification from Anthropic Education (Skilljar).',
    link: 'https://verify.skilljar.com/c/g3c8h63u8ch8',
    type: 'pdf',
    issuerUrl: 'https://anthropic.skilljar.com/claude-101'
  }
];

const badges = [
  {
    title: 'Building Diverse and Effective Teams for Success in Business Careers',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=db25b03f218c9446c108226daa957dc750493f53',
    date: 'May 3, 2026',
    image: '/assets/badges/uopeople-building-diverse-effective-teams.png'
  },
  {
    title: 'AI and the Future of Work: Preparing for the AI-Driven Job Market in Computer Science',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=09b53d69bcae1ddc8e467941ca56c0b31b639e78',
    date: 'May 3, 2026',
    image: '/assets/badges/uopeople-ai-future-of-work-cs.png'
  },
  {
    title: 'Promoting Equity and Social Justice in Online Work Environments',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=3c2362b7c3c1e36035e30cffd15076890a8239b3',
    date: 'May 3, 2026',
    image: '/assets/badges/uopeople-equity-social-justice-online.png'
  },
  {
    title: 'Leveraging AI for Career Growth and Skill Enhancement in Business and Healthcare Fields',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=c9e20545e8837c357477a482155ccbc2178b5dff',
    date: 'May 3, 2026',
    image: '/assets/badges/uopeople-leveraging-ai-career-growth.png'
  },
  {
    title: 'Cybersecurity Basics Protecting Your Data in the Digital Age',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=5cdbad0331420fd6f766a8817d5f23e5fff18aff',
    date: 'May 3, 2026',
    image: '/assets/badges/uopeople-cybersecurity-basics.png'
  },
  {
    title: 'Conflict Resolution in Teamwork: Strategies for Effective Communication',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=9796dd3bfa6815f3d5d0a9ae5b97e860eb521394',
    date: 'May 3, 2026',
    image: '/assets/badges/uopeople-conflict-resolution.png'
  },
  {
    title: 'Inclusive Communication for Careers in Healthcare',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=bd4517babb7eb75b1bef6e443ccae435a9e33f74',
    date: 'Feb 15, 2026',
    image: '/assets/badges/inclusive-communication.png'
  },
  {
    title: 'Financial Planning: Navigating Personal Finance',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=1ea9fafef6c6ccd8969567cad917052cc99815d4',
    date: 'Feb 15, 2026',
    image: '/assets/badges/financial-planning.png'
  },
  {
    title: 'Building Strong Virtual Teams',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=f07917f67893d4ec9ebf65a473e0067d6740cfd8',
    date: 'Feb 15, 2026',
    image: '/assets/badges/virtual-teams.png'
  },
  {
    title: 'Data-Driven Decision Making',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=a7f9e952434cbd5f85b5ecdbbce844d84be283e7',
    date: 'Feb 15, 2026',
    image: '/assets/badges/data-driven.png'
  },
  {
    title: 'Bridging the Digital Divide',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=b9cf96885ad47ec75ca9366c695d380830d27533',
    date: 'Feb 15, 2026',
    image: '/assets/badges/digital-divide.png'
  },
  {
    title: 'Orientation Completed',
    issuer: 'University of the People',
    link: 'https://my.uopeople.edu/badges/badge.php?hash=03abe8ea5053c31670f05670ce8d6dad3b59832e',
    date: 'Feb 15, 2026',
    image: '/assets/badges/orientation.png'
  }
];

const Card3D = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[400px] rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 flex flex-col items-center justify-between shadow-xl cursor-pointer group perspective-1000"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-4 rounded-lg overflow-hidden bg-black/50"
      >
        {item.type === 'image' ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        ) : (
          <div className="w-full h-full bg-white relative">
            <iframe
              src={`${item.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              className="w-full h-full border-none pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              title={item.title}
              loading="lazy"
            />
            {/* Transparent overlay to allow card hover effects while keeping iframe non-interactive */}
            <div className="absolute inset-0 bg-transparent pointer-events-none" />
          </div>
        )}
      </div>

      <div
        style={{ transform: "translateZ(75px)" }}
        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 rounded-b-xl pointer-events-none"
      >
        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
        {item.issuerUrl ? (
          <a href={item.issuerUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-medium mb-2 block hover:text-indigo-300 pointer-events-auto w-fit">
            {item.issuer} <ExternalLink size={12} className="inline ml-1" />
          </a>
        ) : (
          <p className="text-indigo-400 font-medium mb-2">{item.issuer}</p>
        )}
        <p className="text-gray-300 text-sm line-clamp-3 mb-4">{item.description}</p>

        <div className="flex gap-4 pointer-events-auto">
          {item.type === 'pdf' || item.type === 'image' ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <Download size={16} /> View {item.type === 'pdf' ? 'PDF' : 'Certificate'}
            </a>
          ) : (
            <button className="flex items-center gap-2 text-sm text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
              <ExternalLink size={16} /> Details
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,70,229,0.1),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-indigo-400"
        >
          Certifications & Awards
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000 mb-20">
          {certificates.map((cert, index) => (
            <Card3D key={index} item={cert} />
          ))}
        </div>

        {/* Badges Section */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-indigo-300"
        >
          University of the People Badges
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <motion.a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: '#818cf8' }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:shadow-lg hover:shadow-indigo-500/20 flex items-center gap-4 group"
            >
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-colors duration-300 overflow-hidden">
                {badge.image ? (
                  <img src={badge.image} alt={badge.title} className="w-full h-full object-cover" />
                ) : (
                  <Award size={32} className="text-indigo-400 group-hover:text-white" />
                )}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">{badge.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{badge.issuer}</p>
                <p className="text-xs text-gray-500 mt-1">{badge.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
