'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-gray-100/10 py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        delay: 0.2 
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="relative z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#hero" className="text-2xl font-bold relative">
            <span className="text-foreground">Anim</span>
            <span className="text-accent neon-glow inline-block">X</span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-1 rounded-full neon-glow" 
              style={{
                background: 'linear-gradient(to right, var(--laser-color-1), var(--laser-color-2), var(--laser-color-3))'
              }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: 1, 
                ease: 'easeInOut', 
                delay: 0.5,
              }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3 + index * 0.1,
                type: 'spring', 
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.1, 
                color: 'var(--accent)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={link.href} 
                className="text-foreground hover:text-accent transition-colors font-medium px-1 py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="relative z-50 md:hidden flex flex-col items-center justify-center w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <span className={`w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </motion.button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-background flex md:hidden flex-col items-center justify-center z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.nav 
                className="flex flex-col items-center justify-center space-y-10"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-foreground text-2xl font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
} 