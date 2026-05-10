import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavItem = ({ href, children, onClick, isMobile = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 180, damping: 18 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 18 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-14deg", "14deg"]);

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
    <motion.a
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={isMobile ? { x: 6 } : { y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      style={{
        rotateX: isMobile ? undefined : rotateX,
        rotateY: isMobile ? undefined : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={
        isMobile
          ? "text-gray-200 hover:text-white transition-colors text-lg font-semibold block w-fit"
          : "group relative text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-semibold"
      }
    >
      <span
        style={{ transform: isMobile ? undefined : "translateZ(22px)" }}
        className={
          isMobile
            ? "inline-flex items-center gap-3"
            : "inline-flex items-center"
        }
      >
        {children}
      </span>
      {!isMobile && (
        <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />
      )}
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Tech', href: '#tech-skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certs', href: '#certificates' },
    { name: 'Work', href: '#work-journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[160px] bg-gradient-to-r from-indigo-600/15 via-fuchsia-600/10 to-cyan-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        <motion.a
          href="#"
          whileHover={{ scale: 1.04, rotateZ: -1 }}
          whileTap={{ scale: 0.98 }}
          className="text-2xl font-extrabold text-white tracking-tighter"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span style={{ transform: "translateZ(18px)" }} className="inline-block">
            RT<span className="text-indigo-500">.</span>
          </span>
        </motion.a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              href={link.href}
            >
              {link.name}
            </NavItem>
          ))}
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <NavItem
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  isMobile
                >
                  {link.name}
                </NavItem>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
