'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Footer columns for links
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Legal', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'API', href: '#' },
      ]
    },
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Enterprise', href: '#' },
      ]
    },
  ];

  return (
    <footer className="bg-gray/5 border-t border-gray/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="#hero" className="text-2xl font-bold relative inline-block mb-6">
                <span className="text-foreground">Anim</span>
                <span className="text-accent-light neon-glow">X</span>
              </Link>
              
              <p className="text-foreground/80 mb-8 max-w-md">
                Elevate your digital products with stunning animations and transitions that captivate users and create memorable experiences.
              </p>
              
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="text-foreground/70 hover:text-laser-color-2 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: '0 0 8px var(--laser-color-2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{social}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Footer sections */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1 * sectionIndex
                }}
              >
                <h3 className="font-semibold mb-4 text-accent-light">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-foreground/70 hover:text-laser-color-1 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom bar */}
        <motion.div
          className="border-t border-gray/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AnimX. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-foreground/70 hover:text-laser-color-3 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Back to top button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="#hero"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray/20 text-accent-light hover:bg-gradient-to-r hover:from-laser-color-1 hover:via-laser-color-2 hover:to-laser-color-3 hover:text-white transition-all duration-300 shadow-lg"
            whileHover={{ 
              y: -5,
              boxShadow: '0 0 15px 2px rgba(var(--accent-rgb), 0.3)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
} 