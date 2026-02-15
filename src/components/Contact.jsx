import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Check, AlertCircle, Download } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(val));
  };

  const handleDownload = () => {
    if (isEmailValid) {
      window.open('https://drive.google.com/file/d/14QqCdTKx0t3PhBEDSljNTEqzgdp0hyux/view?usp=sharing', '_blank');
      setShowDownload(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-indigo-400"
        >
          Contact Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <div className="flex items-center gap-4">
              <div className="bg-indigo-900/50 p-3 rounded-full text-indigo-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:ranjeettiwari105@gmail.com" className="text-lg hover:text-indigo-400 transition-colors">
                  ranjeettiwari105@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-indigo-900/50 p-3 rounded-full text-indigo-400">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ranjeet-tiwary-67586b185/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-indigo-400 transition-colors">
                  View Profile
                </a>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText size={20} className="text-indigo-400" />
                Download Resume
              </h4>
              <p className="text-gray-400 text-sm mb-4">Please enter your email to download my resume.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  onClick={handleDownload}
                  disabled={!isEmailValid}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isEmailValid
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  {showDownload ? <Check size={16} /> : <Download size={16} />}
                  Download
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/ranjeet-tiwary-67586b185/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-indigo-500/30">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
