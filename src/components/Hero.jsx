import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);

  // Mouse movement effect for 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Smooth out the mouse values
  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Animated Background Layer */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: moveX,
          y: moveY,
          scale: 1.1, // Scale up slightly to avoid edges during movement
        }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <motion.img
          src="/assets/profile-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
      </motion.div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
        >
          Ranjeet Tiwary
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md"
        >
          Business Development & Inside Sales Leader <br className="hidden md:block" />
          Revenue Growth • Pipeline Management • International Markets (UK/India)
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white">
            P&L Ownership • Forecasting • CRM Hygiene
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white">
            Team Leadership • Coaching • Performance Management
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white">
            Market Research • GTM Strategy • Stakeholder Management
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
